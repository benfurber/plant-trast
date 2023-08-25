import React from "react";

import { Button } from "."

import type { ITag } from "../types";

interface IProps {
  isSubmittable: boolean;
  submitValue: ITag | undefined;
}

const LABEL = "Search Plants";

export const SearchButton = (props: IProps) => {
  const { isSubmittable, submitValue } = props;
  const to = submitValue ? `/tag/${submitValue.slug}` : "";

  return (
    <Button dataCy="search-button" to={to} isSubmittable={isSubmittable} label={LABEL} />
  );
};
