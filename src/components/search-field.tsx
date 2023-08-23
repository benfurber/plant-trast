import React from "react";
import styled from "@emotion/styled";

import { dimensions } from "../styles/variables";

import type { PropGetters } from "downshift"

const { componentPadding } = dimensions;
const StyledInput = styled.input`
  padding: ${componentPadding}rem;
  width: 100%;
`;

interface IProps {
  getInputProps: PropGetters<"input">["getInputProps"];
  isSubmittable: boolean;
}

export const SearchField = (props: IProps) => {
  const { getInputProps, isSubmittable } = props;

  const extraStyle = isSubmittable ? { fontWeight: "bold" } : {};

  return (
    <StyledInput
      style={extraStyle}
      data-cy="search-field"
      {...getInputProps()}
    />
  );
};
