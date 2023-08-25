import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, dimensions } from "../styles/variables";

interface IProps {
  dataCy: string;
  isSubmittable: boolean;
  label: string;
  to: string;
}

export const Button = (props: IProps) => {
  const { dataCy, isSubmittable, label, to } = props;

  const { brand, white } = colors;
  const { main, slightlyTransparent, transparent } = brand;

  const mainBackground = isSubmittable ? slightlyTransparent : transparent;
  const hoverBackground = isSubmittable ? main : transparent;
  const textDecoration = isSubmittable ? 'underline' : 'none';
  const color = isSubmittable ? white.pure : white.slightlyTransparent

  const StyledButton = styled(Link)`
    background-color: ${mainBackground};
    border: 0;
    border-radius: 3px;
    color: ${color};
    display: flex;
    justify-content: center;
    padding: ${dimensions.componentPadding}rem;
    width: 100%;

    :hover {
      background-color: ${hoverBackground}; 
      text-decoration: ${textDecoration}; 
    }
  `;

  return (
    <StyledButton data-cy={dataCy} to={to}>
      {label}
    </StyledButton>
  );
};
