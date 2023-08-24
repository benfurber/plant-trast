import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { setConfiguration } from "react-grid-system";
import Helmet from "react-helmet";

import normalize from "./styles/normalize";
import { Header, RouterProvider } from "./components";

setConfiguration({ maxScreenClass: "lg" });
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
      <RouterProvider />
    </RootLayout>
  );
}

export default App;
