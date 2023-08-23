import React from "react";
import styled from "@emotion/styled";

import { colors, dimensions } from "../styles/variables";

import type { ITag } from "../types";

type Event = React.FormEvent<HTMLButtonElement>;
interface IProps {
  isSubmittable: boolean;
  submitValue: ITag | undefined;
}

const { componentPadding } = dimensions;
const { accent, accentTransparent, black } = colors;
const StyledButton = styled('button')`
  background-color: ${accent};
  border: 0;
  color: ${black};
  padding: ${componentPadding}rem;
  width: 100% !important;
  cursor: pointer;

  &:disabled {
    background-color: ${accentTransparent};
    cursor: not-allowed;
  }
`;

const LABEL = "Search Plants";

export const SearchButton = (props: IProps) => {
  const { isSubmittable, submitValue } = props;

  const handleOnClick = (event: Event) => {
    event.preventDefault();
    console.log(submitValue && submitValue.slug);
  };

  if (isSubmittable) {
    return <StyledButton onClick={handleOnClick}>{LABEL}</StyledButton>;
  }
  return <StyledButton disabled>{LABEL}</StyledButton>;
};
