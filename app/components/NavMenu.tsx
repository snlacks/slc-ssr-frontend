import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";

import { NavLink, type NavLinkProps } from "react-router";

function NavMenuLink(props: NavLinkProps) {
  return <NavLink {...props} className="block p-4 w-full control-actionable" />;
}

export default function NavMenu() {
  return (
    <NavigationMenu.Root className="relative list-none flex">
      <NavigationMenu.List className="flex">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="bg-none border-none p-4 block control-actionable">
            <HamburgerMenuIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-1 top-13 bg-control shadow-lg w-xs outline-1 outline-subdued rounded-md dropdown-animation">
            <ul className="list-none p-xs flex flex-col transition-[height]">
              <li>
                <NavigationMenu.Link asChild>
                  <NavMenuLink to="/">Home</NavMenuLink>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <NavMenuLink to="/blog">Blog</NavMenuLink>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
