import classNames from "classnames";
import type { ComponentPropsWithoutRef, HTMLProps } from "react";

export default function SectionHeading(props: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={classNames("font-semibold text-lg", props.className)}
    />
  );
}
