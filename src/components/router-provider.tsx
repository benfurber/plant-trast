import React from "react";

import { RouterProvider } from "react-router-dom";

import { router } from "../utils";

const Provider = () => {
  return <RouterProvider router={router} />;
};

export { Provider as RouterProvider };
