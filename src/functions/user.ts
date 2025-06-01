import bcrypt from "bcryptjs";
import db from "~/lib/db";
import DataLoader from "dataloader";
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 30, checkperiod: 12 });

const fnUser = {
  login: async ({ email, password }: { email: string, password: string }) => {
    const user = await db.user.findFirst({
      where: { email },
    })

    if (!user) throw new Error(`Account with email ${email} not found`);
    if (!bcrypt.compareSync(password, user.password)) throw new Error(`Password incorrect for email ${email}`);

    return true;
  },

  loadUsersByEmail: new DataLoader(async (emails: readonly string[]) => {
    const users = await db.user.findMany({
      include: { profile: true },
      omit: { password: true },
      where: { email: { in: emails as string[] } },
    });

    return emails.map((email) => {
      return users.find(u => u.email === email) || null;
    });
  }, {
    cacheMap: {
      get: (key) => cache.get(key),
      set: async (key, value) => cache.set(key, await value),
      delete: (key) => cache.del(key),
      clear: () => cache.flushAll(),
    },
  }),

  loadRolesAndMenusByUserId: new DataLoader(async (userIds: readonly string[]) => {
    const roles = await db.role.findMany({
      where: { userRoles: { some: { userId: { in: userIds as string[] } } } },
      select: {
        id: true, code: true, name: true,
        roleMenus: { select: { menu: true } },
        userRoles: { select: { userId: true } }
      }
    });

    return userIds.map((userId) => {
      return roles.filter(role => role.userRoles.some(ur => ur.userId === userId)) || null;
    });
  }, { cache: false }),

  getPaginatedUsers: async ({ page = 1, limit = 10 }: { page: number, limit: number }) => {
    const offset = (page - 1) * limit;

    const totalUsers = await db.user.count();

    const users = await db.user.findMany({
      skip: offset,
      take: limit,
      include: {
        userRoles: {
          select: {
            role: true,
          }
        }
      }
    });

    return {
      users,
      total: totalUsers,
      page,
      limit,
      totalPages: Math.ceil(totalUsers / limit),
    };
  }
}

export default fnUser;