import classNames from "classnames";
import type { HTMLProps } from "react";

export default function Paragraph(props: HTMLProps<HTMLParagraphElement>) {
  return <p {...props} className={classNames("pt-2", props.className)} />;
}
