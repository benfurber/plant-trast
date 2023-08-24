import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-grid-system";

import { dimensions } from "../styles/variables";

const { containerPadding } = dimensions;

const StyledBody = styled.div`
  padding: ${containerPadding}rem 0;
`;

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Body = (props: IProps) => {
  return (
    <StyledBody>
      <Container>
        {props.children}
      </Container>
    </StyledBody>
  );
};
