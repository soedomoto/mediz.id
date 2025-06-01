import { useSession } from "vinxi/http";

type SessionData = {
  email?: string;
  roleId?: string | null;
};

export async function useLoggedInUserSession() {
  "use server";

  const session = await useSession<SessionData>({
    password: process.env.FASKESID_SESSION_SECRET as string,
    name: "logged-in-user",
  });

  return session;
}

// export async function updateLoggedInUserSession(data: SessionData) {
//   "use server";

//   const session = await useLoggedInUserSession();
//   await session.update(data);
// }

export async function clearLoggedInUserSession() {
  "use server";

  const session = await useLoggedInUserSession();
  await session.clear();
}