import { IconCalendar, IconLogo, IconUsers } from "~/components/icons";
import { NavigationMenu, NavigationMenuContent, NavigationMenuDescription, NavigationMenuIcon, NavigationMenuItem, NavigationMenuLabel, NavigationMenuLink, NavigationMenuTrigger } from "~/components/ui/navigation-menu";
import { createAsync, query, useLocation } from "@solidjs/router";
import { getLoggedInUserSession } from "~/sessions/logged-in-user";
import { caller } from "~/routes/(api)/api/trpc/router";

export default function MainNavigation() {
  return (
    <NavigationMenu orientation="horizontal">
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
  )
}