import React from "react";
import styled from "@emotion/styled";
import Downshift from "downshift";
import { Col, Row } from "react-grid-system";

import { colors, dimensions } from "../styles/variables";
import { tags } from "../data/tags";
import { SearchAutoComplete, SearchButton, SearchField } from ".";

import type { ITag } from "../types";

interface IProps {
  initialValue?: string;
}

const StyledRow = styled(Row)`
  background-color: ${colors.white.slightlyTransparent};
  border-radius: ${dimensions.borderRadius}px;
  padding: ${dimensions.containerPadding}rem 0;
`;

const StyledCol = styled(Col)`
  background-color: ${colors.white.pure};
  border-radius: ${dimensions.borderRadius}px;
  border: 1px solid ${colors.gray.faint};
  padding: ${dimensions.componentPadding}rem;
`;

export const Search = (props: IProps) => {
  const { initialValue } = props;
  const [submitValue, setSubmitValue] = React.useState<ITag | undefined>(
    undefined
  );
  const itemToString = (tag: ITag) => (tag ? tag.label : "");

  return (
    <Row justify="center">
    <Col md={12}>
      <StyledRow justify="center">
        <Downshift
          onChange={(tag) => setSubmitValue(tag)}
          itemToString={(tag) => itemToString(tag)}
          initialInputValue={initialValue}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            inputValue,
            isOpen,
            selectedItem,
            getRootProps,
          }) => {
            const filteredTags = tags
              .filter((tag) => !inputValue || tag.label.includes(inputValue))
              .sort((a, b) => b.plantCount - a.plantCount);
            const isVisible = !!(inputValue && inputValue.length > 2 && isOpen);
            const isSubmittable =
              selectedItem && selectedItem.label === inputValue;

            return (
              <StyledCol md={11}>
                <Row align="stretch">
                  <Col xs={9} {...getRootProps({}, { suppressRefError: true })}>
                    <SearchField
                      isSubmittable={isSubmittable}
                      getInputProps={getInputProps}
                    />
                                    <SearchAutoComplete
                  filteredTags={filteredTags}
                  getItemProps={getItemProps}
                  getMenuProps={getMenuProps}
                  isVisible={isVisible}
                />

                  </Col>
                  <Col xs={3}>
                    <SearchButton
                      submitValue={submitValue}
                      isSubmittable={isSubmittable}
                    />
                  </Col>
                </Row>
              </StyledCol>
            );
          }}
        </Downshift>
      </StyledRow>
    </Col></Row>
  );
};
