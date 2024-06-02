import { RxLetterCaseCapitalize } from 'react-icons/rx';
import { TbReportAnalytics } from 'react-icons/tb';
import { RxLetterSpacing } from 'react-icons/rx';
import { useGetStoreData } from '../hooks/useGetStoreData';

import {
  Dashboard,
  ReportsPage,
  LoginPage,
  ProfilPage,
  Resultpage,
  SignInPage,
  SouscriptionPage,
  Uploadpage,
} from '../pages';
import EquipePage from '../pages/TeamPage/TeamPage';
import AuthChecker from '../utils/AuthChecker';

const userData = useGetStoreData('user');

// pages
export const pages = [
  {
    path: '/',
    element: <Uploadpage />,
  },
  {
    path: '/results',
    element: <AuthChecker element={<Resultpage />} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignInPage />,
  },
  {
    path: '/dashboard',
    element: <AuthChecker element={<Dashboard />} />,
  },
  {
    path: '/profile',
    element: <AuthChecker element={<ProfilPage />} />,
  },
  {
    path: '/reports',
    element: <AuthChecker element={<ReportsPage />} />,
  },
  {
    path: '/souscription',
    element: <AuthChecker element={<SouscriptionPage />} />,
  },

  {
    path: '/team',
    element: <AuthChecker element={<EquipePage />} />,
  },
];

// Overview Menus

export const overviewMenu = [
  {
    title: 'More words',
    subtitle: 'It is possible to add more word',
    icon: <RxLetterCaseCapitalize size={20} />,
    link: '/souscription',
  },
  {
    title: 'View your reports',
    subtitle: 'It is possible to view your reports',
    icon: <TbReportAnalytics size={20} />,
  },
  {
    title: userData ? userData.credit : 0,
    subtitle: 'total number of words',
    icon: <RxLetterSpacing size={20} />,
  },
];
