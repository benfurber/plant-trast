import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, dimensions } from "../styles/variables";

import type { ITag } from "../types";

interface IProps {
  isSubmittable: boolean;
  submitValue: ITag | undefined;
}

const LABEL = "Search Plants";

export const SearchButton = (props: IProps) => {
  const { isSubmittable, submitValue } = props;
  const to = submitValue ? `/tag/${submitValue.slug}` : "";

  const { componentPadding } = dimensions;
  const { accent, accentTransparent, black, gray } = colors;

  const StyledButton = styled(Link)`
    background-color: ${isSubmittable ? accent : accentTransparent};
    border: 0;
    color: ${isSubmittable ? black : gray.calm};
    display: flex;
    padding: ${componentPadding}rem;
    justify-content: center;
    width: 100% !important;
  `;

  return (
    <StyledButton data-cy="search-button" to={to}>
      {LABEL}
    </StyledButton>
  );
};
