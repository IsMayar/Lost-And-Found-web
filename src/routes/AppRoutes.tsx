import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ReportLost from "../pages/reportLost/ReportLost";
import ReportFound from "../pages/reportFound/ReportFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Matches from "../pages/matches/Matches";
import { Search } from "../pages/search";
import { ItemDetails } from "../pages/itemDetails/ItemDetails";
import ClaimItem from "../pages/claim/ClaimItem";
import MyReports from "../pages/myReports/MyReports";
import Notifications from "../pages/notifications/Notifications";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "report-lost", element: <ReportLost /> },
      { path: "report-found", element: <ReportFound /> },
      { path: "search", element: <Search /> },
      { path: "matches", element: <Matches /> },
      { path: "items/:id", element: <ItemDetails /> },
      { path: "claim/:id", element: <ClaimItem /> },
      { path: "my-reports", element: <MyReports /> },
      { path: "notifications", element: <Notifications /> },
      { path: "profile", element: <Profile /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
