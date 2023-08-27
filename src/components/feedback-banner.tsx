import * as React from "react";
import styled from "@emotion/styled";
import { Container, Col, Row } from "react-grid-system";

import { colors, dimensions } from "../styles/variables";

const StyledHeader = styled.header`
  background-color: #8e3604;
  padding: ${dimensions.containerPadding / 2}rem 0;
  width: 100%;
`;

const StyledLink = styled.a`
  color: ${colors.white.pure};
  font-size: ${dimensions.fontSize.small}rem;
  line-height: ${dimensions.fontSize.small} !important;

  span {
    font-weight: bold;
  }
`;

const FeedbackBanner: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <Container>
        <Row justify="center">
          <Col sm={10}>
            <StyledLink href="mailto:ben.furber@googlemail.com">
              <span>This website is new - I'd love your feedback.</span> Is
              something missing? Does something not work? Would you like it to
              do something else?
            </StyledLink>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export { FeedbackBanner };
