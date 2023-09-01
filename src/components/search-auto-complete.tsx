import React from "react";
import styled from "@emotion/styled";

import { colors, dimensions, fonts } from "../styles/variables";

import type { PropGetters } from "downshift";
import type { ITag } from "../types";

const StyledContainer = styled.div`
  background-color: ${colors.gray.light};
  border-radius: 5px;
  max-height: 250px;
  overflow: overlay;
  padding: ${dimensions.componentPadding}rem;
  position: absolute;
  scrollbar-color: ${colors.brand.transparent} ${colors.gray.light};
  width: 100%;
  z-index: 1;
`;

const StyledSpan = styled.span`
  font-family: ${fonts.titles};
  font-size: ${dimensions.headingSizes.h5}rem;
  font-weight: bold;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: ${dimensions.componentPadding / 2}rem 0;
  padding: 0;
`;

const StyledLi = styled.li`
  background-color: ${colors.white.transparent};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  margin: 0 0 5px 0;

  :hover {
    background-color: ${colors.white.pure};
    text-decoration: underline;
  }
`;

interface IProps {
  filteredTags: ITag[];
  getItemProps: PropGetters<any>["getItemProps"];
  getMenuProps: PropGetters<"input">["getMenuProps"];
  isVisible: boolean;
}

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div style={{ position: "relative" }}>
      <StyledContainer>{children}</StyledContainer>
    </div>
  );
};

export const SearchAutoComplete = (props: IProps) => {
  const { filteredTags, getItemProps, getMenuProps, isVisible } = props;

  if (!isVisible) return null;

  const style = {};

  if (isVisible && filteredTags.length > 0) {
    return (
      <Container>
        <StyledSpan>Plants to compare</StyledSpan>
        <StyledUl {...getMenuProps()}>
          {filteredTags.map((item, index) => (
            <StyledLi
              {...getItemProps({
                key: item.id,
                index,
                item,
                style,
              })}
            >
              {`${item.label} (${item.plantCount})`}
            </StyledLi>
          ))}
        </StyledUl>
      </Container>
    );
  }

  return (
    <Container>
      <StyledSpan>
        <i>No plants with that phrase, try another.</i>
      </StyledSpan>
    </Container>
  );
};
