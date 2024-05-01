import { LuUserPlus2 } from "react-icons/lu";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { TbReportAnalytics } from "react-icons/tb";
import { RxLetterSpacing } from "react-icons/rx";

import {
  Dashboard,
  FacturationPage,
  LoginPage,
  ProfilPage,
  Resultpage,
  SignInPage,
  SouscriptionPage,
  Uploadpage,
} from "../pages";
import EquipePage from "../pages/TeamPage/TeamPage";

// pages
export const pages = [
  {
    path: "/",
    element: <Uploadpage />,
  },
  {
    path: "/results",
    element: <Resultpage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignInPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <ProfilPage />,
  },
  {
    path: "/facture",
    element: <FacturationPage />,
  },
  {
    path: "/souscription",
    element: <SouscriptionPage />,
  },

  {
    path: "/team",
    element: <EquipePage />,
  },
];

// Overview Menus

export const overviewMenu = [
  {
    title: "Add new team member",
    subtitle: "It is possible to add a new member to a team",
    icon: <LuUserPlus2 size={20} />,
    link: "/team",
  },
  {
    title: "More words",
    subtitle: "It is possible to add more word",
    icon: <RxLetterCaseCapitalize size={20} />,
    link: "/souscription",
  },
  {
    title: "View your reports",
    subtitle: "It is possible to view your reports",
    icon: <TbReportAnalytics size={20} />,
  },
  {
    title: "679",
    subtitle: "total number of words",
    icon: <RxLetterSpacing size={20} />,
  },
];
