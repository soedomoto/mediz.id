import { action, createAsync, reload, RouteSectionProps, useAction, useLocation } from "@solidjs/router";
import { Suspense } from "solid-js";
import MainNavigation from "~/components/(authenticated)/main-navigation";
import { UserNavigation } from "~/components/(authenticated)/user-navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { getUserSession, getUserSessionInfo, signinIfUnauthenticated } from "~/queries";
import { useLoggedInUserSession } from "~/sessions/logged-in-user";
import { pick, pickBy } from "lodash";

type RoleSelectorOption = { id: string | null, name: string | null }

const changeRole = action(async (roleId: string | null) => {
  "use server"

  try {
    const sess = await useLoggedInUserSession();
    if (sess.data.roleId !== roleId) await sess.update({ roleId });
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
  const userSess = createAsync(() => getUserSession());
  const userInfo = createAsync(() => getUserSessionInfo());
  const changeRoleAction = useAction(changeRole);

  return <>
    <Suspense fallback={<div>Loading...</div>}>
      <div class="border-b">
        <div class="flex h-16 items-center px-4">
          <MainNavigation />
          <div class="ml-auto flex items-center space-x-4">
            <RoleSelector
              roles={(userInfo()?.userRoles || []).map(ur => ur?.role)}
              value={(userInfo()?.userRoles || []).find(ur => ur?.roleId == userSess()?.roleId)?.role}
              onChange={async (value) => {
                await changeRoleAction(value?.id!);
                window.location.reload();
              }}
            />
            <UserNavigation />
          </div>
        </div>
      </div>
      <div class="flex-1 space-y-4 p-8 pt-6">{props.children}</div>
    </Suspense>
  </>;
}