import { IPage } from "app/types";
import { MissingPage } from "modules/core/pages/missing.page";
import { LandingPage } from "../pages/landing.page";
import { LoginPage } from "../pages/login.page";
import { RegisterPage } from "../pages/register.page";

export const authRoutes: IPage[] = [
  {
    name: "Login",
    link: "/login",
    content: <LoginPage />,
  },
  {
    name: "Register",
    link: "/register",
    content: <RegisterPage />,
  },
  {
    name: "Landing",
    link: "/landing",
    content: <LandingPage />,
  },
];
