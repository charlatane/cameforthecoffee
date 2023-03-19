import { IDashboard } from "app/types";
import { LogoComponent } from "app/components/logo.component";
import { PlaceholderPage } from "../../core/pages/placeholder.page";
import { MissingPage } from "modules/core/pages/missing.page";
import { LoginPage } from "modules/auth/pages/login.page";
import { CreateCvPage } from "../pages/create-cv.page";
import { YourWorkPage } from "../pages/your-work.page";
import { CvTabComponent } from "../components/cv-tab.component";

export const homeDashboard: IDashboard = {
  dashboardName: "home",
  logo: <LogoComponent />,
  pages: [
    {
      name: "Dashboard",
      link: "/home/dashboard",
      content: <CreateCvPage />,
    },
    {
      name: "Create CV",
      link: "/home/create-cv",
      content: <CvTabComponent />,
    },
    {
      name: "Your Work",
      link: "/home/your-work",
      content: <YourWorkPage />,
    },
    {
      name: "Log Out",
      link: "/login",
      content: <LoginPage />,
    },
  ],

  sidebar: [
    {
      name: "Dashboard",
      link: "/home/dashboard",
      content: <CreateCvPage />,
    },
    {
      name: "Create CV",
      link: "/home/create-cv",
      content: <CvTabComponent />,
    },
    {
      name: "Your Work",
      link: "/home/your-work",
      content: <YourWorkPage />,
    },
    {
      name: "Log Out",
      link: "/login",
      content: <LoginPage />,
    },
  ],
};
