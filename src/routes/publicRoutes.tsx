import WithSuspense from "components/HOC/WithSuspense";
import { lazy } from "react";
import { PUBLIC_PATHS } from "./pagePaths";

const HomePage = WithSuspense(lazy(() => import("pages/HomePage")));
const LoginPage = WithSuspense(lazy(() => import("pages/LoginPage")));
const SignupPage = WithSuspense(lazy(() => import("pages/SignupPage")));

const { HOME, LOGIN, SIGNUP } = PUBLIC_PATHS;

const PUBLIC_ROUTES = [
  { path: HOME, element: <HomePage /> },
  { path: LOGIN, element: <LoginPage /> },
  { path: SIGNUP, element: <SignupPage /> },
  { path: "*", element: <div>Page not found</div> },
];

export default PUBLIC_ROUTES;
