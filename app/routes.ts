import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/views/auth/root.tsx", [
    route("login", "routes/views/auth/login.tsx"),
    route("register", "routes/views/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
