import { query, redirect } from "@solidjs/router";
import { caller } from "~/routes/(api)/api/trpc/router";
import { useLoggedInUserSession } from "~/sessions/logged-in-user";

export const redirectIfAuthenticated = query(async (next?: string): Promise<void> => {
  "use server"

  const session = await useLoggedInUserSession();
  if (session?.data?.email) {
    throw redirect(decodeURIComponent(next || "/"));
  }
}, "redirectIfAuthenticated");

export const signinIfUnauthenticated = query(async (next?: string): Promise<void> => {
  "use server"

  const session = await useLoggedInUserSession();
  if (!session?.data?.email) {
    throw redirect("/auth/signin?next=" + encodeURIComponent(next || "/"));
  }
}, "signinIfUnauthenticated");

export const getUserSession = query(async () => {
  "use server"

  const session = await useLoggedInUserSession();
  if (!session?.data?.email) {
    return null;
  }

  return await caller.loadUsersByEmail({ email: session.data.email || "" });
}, "getUserSession");