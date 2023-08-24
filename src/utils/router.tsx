import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home, ErrorPage } from "../components";

import { TagPage } from "../components/tag-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tag/:slug",
    element: <TagPage />,
  },
]);
