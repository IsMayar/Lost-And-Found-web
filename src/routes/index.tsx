import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      // Shop / product listing page
      {
        path: "shop",
        element: <ShopPage />,
      },

      // Product details page (FIXED naming)
      {
        path: "product/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);
