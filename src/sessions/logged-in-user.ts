import { useSession } from "vinxi/http";
import { caller } from "~/routes/(api)/api/trpc/router";

type SessionData = {
  email?: string;
  role?: {  id: string | null; name: string | null };
};

export async function useLoggedInUserSession() {
  "use server";

  const session = await useSession<SessionData>({
    password: process.env.FASKESID_SESSION_SECRET as string,
    name: "logged-in-user",
  });

  return session;
}

export async function getLoggedInUserSession() {
  "use server";

  const session = await useLoggedInUserSession();
  if (!session.data) {
    return null;
  }

  const user = await caller.loadUsersByEmail({ email: session.data.email || "" });

  return { ...session.data, user };
}

export async function updateLoggedInUserSession(data: SessionData) {
  "use server";

  const session = await useLoggedInUserSession();
  await session.update(data);
}

export async function clearLoggedInUserSession() {
  "use server";

  const session = await useLoggedInUserSession();
  await session.clear();
}