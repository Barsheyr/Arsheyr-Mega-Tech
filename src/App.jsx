import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  SingleProductPage,
  Landing,
  ProductsPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "/productpage",
        element: <ProductsPage />,
      },
      {
        path: "/productpage/:id",
        element: <SingleProductPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
