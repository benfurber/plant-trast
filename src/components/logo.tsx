import * as React from "react";
import styled from "@emotion/styled";

import { siteWide } from "../labels";
import { dimensions, spacing } from "../styles/variables";

const Description = styled.h2`
  font-size: ${dimensions.headingSizes.h5}rem;
  font-weight: 700;
  margin: 0;
`;

const HomepageLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${spacing.small}em;
`;

const Title = styled.h1`
  font-size: ${dimensions.headingSizes.h0}rem;
  font-weight: 300;
  line-height: 0.8;
  margin: 0;
`;

const TitleBold = styled.span`
  font-size: ${dimensions.headingSizes.h0 + 0.5}rem;
  font-weight: 600;
`;

const Logo: React.FC<{}> = () => (
  <HomepageLink>
    <Text>
      <Title>
        <TitleBold>Plant</TitleBold>-trast
      </Title>
      <Description>{siteWide.description}</Description>
    </Text>
  </HomepageLink>
);

export { Logo };
