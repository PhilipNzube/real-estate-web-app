import { createBrowserRouter } from "react-router-dom";
import Layout from "../../shared/components/Layout";
import HomePage from "../../features/home/pages/HomePage";
import LandingPage from "../../features/home/pages/LandingPage";
import LoginPage from "../../features/auth/pages/LoginPage";
import AccountSetupLayout from "../../features/auth/components/AccountSetupLayout";
import CompleteAccountSetupPage from "../../features/auth/pages/CompleteAccountSetupPage";
import AccountVerificationPage from "../../features/auth/pages/AccountVerificationPage";
import AccountPreferencesPage from "../../features/auth/pages/AccountPreferencesPage";
import AccountWelcomePage from "../../features/auth/pages/AccountWelcomePage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import DashboardHomePage from "../../features/dashboard/pages/DashboardHomePage";
import NotFoundPage from "../../shared/components/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <AccountSetupLayout />,
        children: [
          {
            index: true,
            element: <CompleteAccountSetupPage />,
          },
          {
            path: "verification",
            element: <AccountVerificationPage />,
          },
          {
            path: "preferences",
            element: <AccountPreferencesPage />,
          },
        ],
      },
      {
        path: "welcome",
        element: <AccountWelcomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            index: true,
            element: <DashboardHomePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

