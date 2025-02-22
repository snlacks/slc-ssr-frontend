import SectionHeading from "../components/typography/headings/SectionHeading";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StevenLacks.com" },
    { name: "My demo website", content: "Come and see..." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <section className="p-4">
      <SectionHeading>StevenLacks.com</SectionHeading>
    </section>
  );
}
