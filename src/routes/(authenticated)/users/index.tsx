import { createAsync, query } from "@solidjs/router"
import db from "~/lib/db"
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"
import { caller } from "../../(api)/api/trpc/router"
import { For } from "solid-js"
import { Badge } from "~/components/ui/badge"

type PaginatedUsers = Awaited<ReturnType<typeof caller.getPaginatedUsers>>;
type User = PaginatedUsers["users"][number];

const getData = query(async (): Promise<PaginatedUsers> => {
  "use server"

  const users = await caller.getPaginatedUsers({
    page: 1,
    limit: 10
  })

  return users
}, "getData")

export default function DemoPage() {
  const data = createAsync(() => getData())

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">User Page</h1>
      <DataTable columns={[
        {
          accessorKey: "email",
          header: "Email",
          cell: (info) => <div class="flex gap-2">{info.getValue() ?? ''}</div>,
        },
        {
          accessorKey: "userRoles",
          header: "Roles",
          cell: (info) => {
            const userRoles = info.getValue() as User["userRoles"];
            if (!userRoles || userRoles.length === 0) {
              return "No roles";
            }

            return <div class="flex gap-2">
              <For each={userRoles}>
                {(userRole) => <Badge variant="outline">{userRole?.role?.name}</Badge>}
              </For>
            </div>

            return userRoles?.map((userRole) => userRole?.role?.name).join(", ") ?? "No roles";
          },
        },
      ]} data={data()?.users ?? []} />
    </main>
  )
}