import bcrypt from "bcryptjs";
import db from "~/lib/db";
import DataLoader from "dataloader";
import NodeCache from 'node-cache';
import _ from "lodash";

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
      include: { profile: true, userRoles: { include: { role: { select: { id: true, code: true, name: true } } } } },
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

  loadMenusByRoleId: new DataLoader(async (roleIds: readonly string[]) => {
    const allMenus = await db.menu.findMany({
      include: { roleMenus: { select: { roleId: true } } },
      omit: { createdAt: true, createdBy: true, updatedAt: true, updatedBy: true }
    });

    function addParentMenus(menus: typeof allMenus) {
      let pMenus = menus.map(menu => {
        return allMenus.find(m => m?.id === menu?.parentId) || null;
      }).filter(m => !!m)

      pMenus = _.uniqBy(pMenus, 'id');
      if (pMenus.length > 0) pMenus = addParentMenus(pMenus)

      return [...menus, ...pMenus]
    }

    let menus = allMenus.filter(m => m?.roleMenus?.some(rm => rm?.roleId && roleIds.includes(rm.roleId)));
    menus = addParentMenus(menus);
    menus = _.uniqBy(menus, 'id');

    // const menus = await db.menu.findMany({
    //   where: { roleMenus: { some: { roleId: { in: roleIds as string[] } } } },
    //   include: { roleMenus: { select: { roleId: true } } },
    //   omit: { createdAt: true, createdBy: true, updatedAt: true, updatedBy: true }
    // });

    return roleIds.map((roleId) => {
      return menus.filter(menu => menu?.roleMenus?.every(rm => rm?.roleId == roleId)) || [];
    });
  }, {
    cacheMap: {
      get: (key) => cache.get(key),
      set: async (key, value) => cache.set(key, await value),
      delete: (key) => cache.del(key),
      clear: () => cache.flushAll(),
    },
  }),

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