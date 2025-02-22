import classNames from "classnames";
import type { PropsWithChildren } from "react";

export default function TitleBar(props: PropsWithChildren) {
  return (
    <div
      {...props}
      className="border-b-1 border-b-subdued bg-control flex items-center gap-4 max-md:sticky z-40"
    />
  );
}
