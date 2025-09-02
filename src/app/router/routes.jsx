import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from "../../shared/components/Layout";
import LandingPage from "../../features/home/pages/LandingPage";
import LoginPage from "../../features/auth/pages/LoginPage";
import AccountSetupLayout from "../../features/auth/components/AccountSetupLayout";
import CompleteAccountSetupPage from "../../features/auth/pages/CompleteAccountSetupPage";
import AccountVerificationPage from "../../features/auth/pages/AccountVerificationPage";
import AccountPreferencesPage from "../../features/auth/pages/AccountPreferencesPage";
import AccountWelcomePage from "../../features/auth/pages/AccountWelcomePage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import DashboardHomePage from '../../features/dashboard/pages/DashboardHomePage';
import PropertiesPage from "../../features/dashboard/pages/PropertiesPage";
import SavedPropertiesPage from "../../features/dashboard/pages/SavedPropertiesPage";
import InvestmentPage from "../../features/dashboard/pages/InvestmentPage";
import InvestmentDetailsPage from "../../features/dashboard/pages/InvestmentDetailsPage";
import InquiriesPage from "../../features/dashboard/pages/InquiriesPage";
import PropertyAlertsPage from "../../features/dashboard/pages/PropertyAlertsPage";
import MessagesPage from "../../features/dashboard/pages/MessagesPage";
import NotFoundPage from "../../shared/components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
          {
            path: "properties",
            element: <PropertiesPage />,
          },
          {
            path: "saved-properties",
            element: <SavedPropertiesPage />,
          },
          {
            path: "investment",
            element: <InvestmentPage />,
          },
          {
            path: "investment/:id",
            element: <InvestmentDetailsPage />,
          },
          {
            path: "inquiries",
            element: <InquiriesPage />,
          },
          {
            path: "alerts",
            element: <PropertyAlertsPage />,
          },
          {
            path: "messages",
            element: <MessagesPage />,
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

export default router;

