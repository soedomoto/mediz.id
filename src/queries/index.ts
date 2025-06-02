import { query, redirect } from "@solidjs/router";
import { caller } from "~/routes/(api)/api/trpc/router";
import { useLoggedInUserSession } from "~/sessions/logged-in-user";

export const redirectIfAuthenticated = async (next?: string): Promise<void> => {
  "use server"

  const session = await useLoggedInUserSession();
  if (session?.data?.email) {
    throw redirect(decodeURIComponent(next || "/"));
  }
}

export const qRedirectIfAuthenticated = query(redirectIfAuthenticated, "redirectIfAuthenticated");

export const signinIfUnauthenticated = async (next?: string): Promise<void> => {
  "use server"

  const session = await useLoggedInUserSession();
  if (!session?.data?.email) {
    throw redirect("/auth/signin?next=" + encodeURIComponent(next || "/"));
  }
}

export const qSigninIfUnauthenticated = query(signinIfUnauthenticated, "signinIfUnauthenticated");

export const getUserSession = async () => {
  "use server"

  return (await useLoggedInUserSession())?.data;
}

export const qGetUserSession = query(getUserSession, "getUserSession");

export const getUserSessionInfo = async () => {
  "use server"

  const session = await useLoggedInUserSession();
  if (!session?.data?.email) {
    return null;
  }

  return await caller.loadUsersByEmail({ email: session.data.email || "" });
}

export const qGetUserSessionInfo = query(getUserSessionInfo, "getUserSessionInfo");

export const getMenuByRole = async () => {
  "use server"

  const session = await useLoggedInUserSession();
  if (!session?.data?.roleId) {
    return [];
  }

  return await caller.loadMenusByRoleId({ roleId: session?.data?.roleId });
}

export const qGetMenuByRole = query(getMenuByRole, "getMenuByRole");