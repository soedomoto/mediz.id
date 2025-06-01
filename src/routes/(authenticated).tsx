import { action, createAsync, query, redirect, RouteSectionProps, useAction, useLocation } from "@solidjs/router";
import MainNavigation from "~/components/(authenticated)/main-navigation";
import { UserNavigation } from "~/components/(authenticated)/user-navigation";
import { getLoggedInUserSession, updateLoggedInUserSession } from "~/sessions/logged-in-user";
import { caller } from "./(api)/api/trpc/router";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

type RoleSelectorOption = { id: string | null, name: string | null }

const checkLoggedInUser = query(async (next?: string) => {
  "use server"

  const userSess = await getLoggedInUserSession();
  if (!userSess) {
    throw redirect("/auth/signin?next=" + encodeURIComponent(next || "/"));
  }

  const roles = await caller.loadRolesAndMenusByUserId({ userId: userSess?.user?.id || "" });
  return { user: userSess, roles };
}, "checkLoggedInUser");

const changeRole = action(async (values: RoleSelectorOption | null) => {
  "use server"

  try {
    await updateLoggedInUserSession({ role: { id: values?.id || null, name: values?.name || null } });
  } catch (err: Error | any) {
    return { error: true, message: err?.message };
  }

  return { error: false };
});

const RoleSelector = (props: { value?: RoleSelectorOption, onChange?: (value: RoleSelectorOption | null) => void, roles: RoleSelectorOption[] }) => {
  return (
    <Select
      value={props?.value}
      onChange={props?.onChange}
      options={props?.roles ?? []}
      optionValue="id"
      optionTextValue="name"
      placeholder="Select a role…"
      itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue.name}</SelectItem>}
    >
      <SelectTrigger aria-label="Role" class="w-[180px]">
        <SelectValue<RoleSelectorOption>>{(state) => state.selectedOption().name}</SelectValue>
      </SelectTrigger>
      <SelectContent />
    </Select>
  )
}

export default function BlogLayout(props: RouteSectionProps) {
  const location = useLocation();
  const userSess = createAsync(() => checkLoggedInUser(location.pathname));
  const changeRoleAction = useAction(changeRole);

  return <>
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        <MainNavigation />
        <div class="ml-auto flex items-center space-x-4">
          <RoleSelector 
          roles={userSess()?.roles || []} 
          value={userSess()?.user?.role} 
          onChange={(value) => {
            if (value?.id !== userSess()?.user?.role?.id) {
              changeRoleAction(value);
            }
          }} 
          />
          <UserNavigation />
        </div>
      </div>
    </div>
    <div class="flex-1 space-y-4 p-8 pt-6">{props.children}</div>
  </>;
}