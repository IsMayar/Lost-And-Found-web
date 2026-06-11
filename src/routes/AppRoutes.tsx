import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReportLost from "../pages/ReportLost";
import ReportFound from "../pages/ReportFound";
import Dashboard from "../pages/Dashboard";

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
