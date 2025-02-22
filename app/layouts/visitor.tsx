import cn from "classnames";

import { Outlet } from "react-router";
import NavMenu from "../components/NavMenu";
import TitleBar from "../components/typography/TitleBar";
import { ScrollArea } from "radix-ui";

export default function Visitor() {
  return (
    <div
      className={cn(
        "h-screen w-screen",
        "md:grid grid-rows-[max-content_1fr]",
        "max-md:flex max-md:flex-col"
      )}
    >
      <TitleBar>
        <NavMenu />
        <h1 className="text-lg font-semibold">StevenLacks.com</h1>
      </TitleBar>
      <ScrollArea.Root type="scroll" className="overflow-hidden">
        <ScrollArea.Viewport className="h-full w=full">
          <div className="grow max-md:pt-1 md:pl-1">
            <Outlet />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="scrollbar bg-subtle p-1 w-4"
        >
          <ScrollArea.Thumb className="scrollbar-thumb relative flex-1 rounded-sm bg-control-highlighted w-2" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
