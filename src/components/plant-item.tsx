import React from "react";
import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";

import { Button } from ".";
import { colors, dimensions, fonts } from "../styles/variables";

import type { IPlant } from "../types";

const { gray, white } = colors;
const { fontSize, headingSizes } = dimensions;

const StyledCol = styled(Col)`
  padding: 0.25rem;
`;

const StyledImageCol = styled(Col)`
  background-color: ${gray.light};
  padding: 0 !important;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledTextCol = styled(Col)`
  background-color: ${white.slightlyTransparent};
  padding: 0.7rem;
`;

const StyledTitleCol = styled(Col)`
  span {
    font-size: ${headingSizes.h4}rem;
    font-family: ${fonts.titles};
    line-height: 1em;
  }
`;

const StyledPriceCol = styled(Col)`
  font-size: ${headingSizes.h4}rem;
  text-align: right;
  font-family: ${fonts.titles};
`;

const StyledRow = styled(Row)`
  padding: 0.5rem 1rem;
`;

const StyledTags = styled.p`
  font-size: ${fontSize.small}rem;
`

interface IProps {
  plant: IPlant;
}

export const PlantItem = (props: IProps) => {
  const { image, link, name, price, source, tags } = props.plant;

  const tagText = tags.splice(0,5).join(", ") + '...'

  return (
    <StyledCol md={12} lg={6} >
      <Container>
        <Row>
          <StyledImageCol sm={5}>
            {image && <img alt={name} loading="lazy" src={image} />}
          </StyledImageCol>
          <StyledTextCol sm={7}>
            <Row align="stretch" justify="between">
              <StyledTitleCol>
                <span>{name}</span>
                <br />
                {source}
              </StyledTitleCol>
              <StyledPriceCol>
                <strong>£{price}</strong>
              </StyledPriceCol>
            </Row>
            <StyledRow>
              <StyledTags>{tagText}</StyledTags>
            </StyledRow>
            <StyledRow>
              <Button
                dataCy="external-plant-link"
                isSubmittable={true}
                label="See plant"
                to={link}
              />
            </StyledRow>
          </StyledTextCol>
        </Row>
      </Container>
    </StyledCol>
  );
};
