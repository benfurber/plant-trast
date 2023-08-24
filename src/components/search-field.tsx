import React from "react";
import styled from "@emotion/styled";

import { dimensions } from "../styles/variables";

import type { PropGetters } from "downshift";

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
      data-cy="search-field"
      placeholder="Type in a plant word, any plant word..."
      style={extraStyle}
      {...getInputProps()}
    />
  );
};
