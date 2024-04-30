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
  },
];
