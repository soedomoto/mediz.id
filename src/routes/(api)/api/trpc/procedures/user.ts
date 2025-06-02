import { z } from 'zod';
import fnUser from "~/functions/user";
import { Procedure } from "../router";

export default function (procedure: Procedure) {
  return {
    login: procedure
      .input(
        z.object({
          email: z.string().min(1).email(),
          password: z.string().min(8),
        }),
      )
      .query(async ({ ctx, input }) => {
        const { email, password } = input || {};
        return await fnUser.login({ email, password });
      }),

    loadUsersByEmail: procedure
      .input(
        z.object({
          email: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return await fnUser.loadUsersByEmail.load(input.email);
      }),

    loadMenusByRoleId: procedure
      .input(
        z.object({
          roleId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return await fnUser.loadMenusByRoleId.load(input.roleId);
      }),

    getPaginatedUsers: procedure
      .input(
        z.object({
          page: z.number().min(1).default(1),
          limit: z.number().min(1).max(100).default(10),
        }).optional(),
      )
      .query(async ({ ctx, input }) => {
        const { page = 1, limit = 10 } = input || {};
        return await fnUser.getPaginatedUsers({ page, limit });
      }),
  }
}