import React from "react";
import styled from "@emotion/styled";

import { colors, dimensions } from "../styles/variables";

import type { PropGetters } from "downshift";
import type { ITag } from "../types";

const { componentPadding } = dimensions;
const { light } = colors.gray;
const StyledContainer = styled.div`
  background: ${light};
  padding: ${componentPadding}rem;
  width: 100%;
  max-height: 250px;
  overflow: scroll;
`;

interface IProps {
  filteredTags: ITag[];
  getItemProps: PropGetters<any>["getItemProps"];
  getMenuProps: PropGetters<"input">["getMenuProps"];
  isVisible: boolean;
}

export const SearchAutoComplete = (props: IProps) => {
  const { filteredTags, getItemProps, getMenuProps, isVisible } = props;

  if (!isVisible) return null;

  const style = {};

  if (isVisible && filteredTags.length > 0) {
    return (
      <StyledContainer>
        <span>
          <strong>Plants to compare:</strong>
        </span>
        <ul {...getMenuProps()}>
          {filteredTags.map((item, index) => (
            <li
              {...getItemProps({
                key: item.id,
                index,
                item,
                style,
              })}
            >
              <a>{`${item.label} (${item.plantCount})`}</a>
            </li>
          ))}
        </ul>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <span>
        <i>No plants with that phrase, try another.</i>
      </span>
    </StyledContainer>
  );
};
