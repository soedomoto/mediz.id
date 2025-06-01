import { createTRPCClient, httpBatchLink, loggerLink } from "@trpc/client";
import type { AppRouter } from "./trpc/router";

export const trpc = createTRPCClient<AppRouter>({
  links: [loggerLink(), httpBatchLink({ url: "http://localhost:3000/api/trpc" })]
});

// let user = await trpc.createUser.mutate({name: "John Doe", bio: "A software developer"});
// const user = await trpc.getUserById.query("1748343152244");
const user = await trpc.getPaginatedUsers.query({ page: 1, limit: 10 });

console.log("Created user:", user);