import { createBrowserRouter } from "react-router-dom";
import Layout from "../../shared/components/Layout";
import HomePage from "../../features/home/pages/HomePage";
import LandingPage from "../../features/home/pages/LandingPage";
import LoginPage from "../../features/auth/pages/LoginPage";

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
    ],
  },
]);

