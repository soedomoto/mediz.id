import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Context } from './context';
import userRoutes from './procedures/user';

export const t = initTRPC.context<Context>().create();
export const router = t.router;
export type Router = typeof router;
export const procedure = t.procedure;
export type Procedure = typeof procedure;

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const appRouter = router({
  ...userRoutes(procedure),

  getUserById: procedure.input(z.string()).query((opts) => {
    return users[opts.input]; // input type is string
  }),
  createUser: procedure
    // validate input with Zod
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation((opts) => {
      const id = Date.now().toString();
      const user: User = { id, ...opts.input };
      users[user.id] = user;
      return user;
    }),
});
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({} as Context);