import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ReportLost from "../pages/reportLost/ReportLost";
import ReportFound from "../pages/reportFound/ReportFound";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "report-lost",
        element: <ReportLost />,
      },
      {
        path: "report-found",
        element: <ReportFound />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
