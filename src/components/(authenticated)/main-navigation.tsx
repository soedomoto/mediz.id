import { createAsync } from "@solidjs/router";
import clsx from "clsx";
import { For } from "solid-js";
import { IconCalendar, IconUsers } from "~/components/icons";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLabel, NavigationMenuLink, NavigationMenuTrigger } from "~/components/ui/navigation-menu";
import { qGetMenuByRole, getMenuByRole } from "~/queries";

type Menus = Awaited<ReturnType<typeof getMenuByRole>>

function renderMenu(menus: Menus, parentId: string | null = null, level: number = 0) {
  return (
    <For each={menus.filter(m => m?.parentId === parentId)}>
      {(item) => {
        const subMenus = menus.filter(m => m?.parentId === item?.id);

        if (level > 0) {
          return (
            <NavigationMenuLink href={item.path ?? "#"}>
              <NavigationMenuLabel>{item.label}</NavigationMenuLabel>
            </NavigationMenuLink>
          )
        }

        if (subMenus.length === 0) {
          return (
            <NavigationMenuTrigger as="a" href={item.path ?? "#"} class="flex gap-2 items-center">
              <IconCalendar />
              {item.label}
            </NavigationMenuTrigger>
          )
        } else {
          return (
            <NavigationMenuItem>
              <NavigationMenuTrigger as="a" href={item.path ?? "#"} class="flex gap-2 items-center">
                <IconCalendar />
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent class={`grid w-[400px] gap-3 p-4 ${clsx(subMenus.length > 5 ? "md:grid-cols-2 md:w-[500px] lg:w-[600px]" : "md:grid-cols-1 md:w-[250px] lg:w-[300px]")}`}>
                {renderMenu(menus, item.id, level + 1)}
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        }
      }}
    </For>
  )
}

export default function MainNavigation() {
  const menu = createAsync(() => qGetMenuByRole());

  return (
    <>
      <NavigationMenu orientation="horizontal">
        {renderMenu(menu() ?? [])}

        <NavigationMenuTrigger as="a" href="/receptionist/calendar" class="flex gap-2 items-center">
          <IconCalendar />
          Calendar
        </NavigationMenuTrigger>

        <NavigationMenuItem>
          <NavigationMenuTrigger as="a" href="/receptionist/patient" class="flex gap-2 items-center">
            <IconUsers />
            Patient
          </NavigationMenuTrigger>
          <NavigationMenuContent class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <NavigationMenuLink href="/receptionist/patient">
              <NavigationMenuLabel>Patient Finder</NavigationMenuLabel>
            </NavigationMenuLink>
            <NavigationMenuLink href="/receptionist/patient/new">
              <NavigationMenuLabel>New Patient</NavigationMenuLabel>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      {/* <div>{JSON.stringify(menu(), null, 2)}</div> */}
    </>
  )
}