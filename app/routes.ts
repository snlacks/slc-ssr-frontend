import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/visitor.tsx", [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
  ]),
] satisfies RouteConfig;
