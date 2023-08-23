import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-grid-system";

import { dimensions } from "../styles/variables";
import { Search } from "./search";

const { containerPadding } = dimensions;

const StyledBody = styled.div`
  padding: ${containerPadding}rem 0;
`;

export const Body = () => {
  return (
    <StyledBody>
      <Container>
        <Search />
      </Container>
    </StyledBody>
  );
};
