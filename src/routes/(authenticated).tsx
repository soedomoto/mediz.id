import { action, createAsync, RouteSectionProps, useAction, useLocation } from "@solidjs/router";
import { Suspense } from "solid-js";
import MainNavigation from "~/components/(authenticated)/main-navigation";
import { UserNavigation } from "~/components/(authenticated)/user-navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { getUserSession, signinIfUnauthenticated } from "~/queries";
import { updateLoggedInUserSession } from "~/sessions/logged-in-user";

type RoleSelectorOption = { id: string | null, name: string | null }

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
  createAsync(() => signinIfUnauthenticated(location.pathname));
  const cUser = createAsync(() => getUserSession());
  const changeRoleAction = useAction(changeRole);

  return <>
    <Suspense fallback={<div>Loading...</div>}>
      <div class="border-b">
        <div class="flex h-16 items-center px-4">
          <MainNavigation />
          <div class="ml-auto flex items-center space-x-4">
            <RoleSelector
              roles={(cUser()?.userRoles || []).map(ur => ur?.role)}
              // value={userSess()?.session?.role}
              // onChange={(value) => {
              //   if (userSess()?.session?.email && value?.id !== userSess()?.session?.role?.id) {
              //     changeRoleAction(value);
              //   }
              // }}
            />
            <UserNavigation />
          </div>
        </div>
      </div>
      <div class="flex-1 space-y-4 p-8 pt-6">{props.children}</div>
    </Suspense>
  </>;
}