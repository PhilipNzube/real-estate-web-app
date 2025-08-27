import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../shared/components/Layout';
import HomePage from '../../features/home/pages/HomePage';
import DashboardPage from '../../features/dashboard/pages/DashboardPage';
import DashboardHomePage from '../../features/dashboard/pages/DashboardHomePage';
import PropertiesPage from "../../features/dashboard/pages/PropertiesPage";
import SavedPropertiesPage from "../../features/dashboard/pages/SavedPropertiesPage";
import InvestmentPage from "../../features/dashboard/pages/InvestmentPage";
import InvestmentDetailsPage from "../../features/dashboard/pages/InvestmentDetailsPage";
import InquiriesPage from "../../features/dashboard/pages/InquiriesPage";
import NotFoundPage from "../../shared/components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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

