import { action, createAsync, reload, useAction } from "@solidjs/router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import { getUserSessionInfo } from "~/queries";
import { useLoggedInUserSession } from "~/sessions/logged-in-user";

const doLogout = action(async () => {
  "use server"

  const sess = await useLoggedInUserSession();
  await sess.clear();
  reload();
});

export function UserNavigation() {
  const userSess = createAsync(() => getUserSessionInfo());
  const logoutAction = useAction(doLogout);

  return (
    <DropdownMenu placement="bottom-end">
      <DropdownMenuTrigger
        as={Button<"button">}
        variant="ghost"
        class="relative size-8 rounded-full"
      >
        <Avatar class="size-8">
          <AvatarImage src="https://github.com/stefan-karger.png" alt="@stefan-karger" />
          <AvatarFallback>EK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuLabel class="font-normal">
          <div class="flex flex-col space-y-1">
            <p class="text-sm font-medium leading-none">{userSess()?.profile?.nama || userSess()?.email}</p>
            <p class="text-xs leading-none text-muted-foreground">{userSess()?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutAction}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}