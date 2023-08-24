import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { setConfiguration } from "react-grid-system";
import Helmet from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import normalize from "./styles/normalize";
import { Header, Home } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

setConfiguration({ maxScreenClass: "xl" });
const RootLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <RootLayout>
      <Helmet
        link={[
          {
            href: "https://fonts.googleapis.com/css2?family=Kreon&family=Roboto&display=swap",
            rel: "stylesheet",
          },
        ]}
      />
      <Global styles={() => css(normalize)} />
      <Header />
      <RouterProvider router={router} />
    </RootLayout>
  );
}

export default App;
