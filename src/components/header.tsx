import * as React from "react";
import styled from "@emotion/styled";
import { Container, Col, Row } from "react-grid-system";

import { Logo } from ".";
import { dimensions } from "../styles/variables";

const StyledHeader = styled.header`
  padding: ${dimensions.containerPadding}rem 0;
`;

const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <Container>
        <Row justify="center">
          <Col sm={10}>
            <Logo />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export { Header };
