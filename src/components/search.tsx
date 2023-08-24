import React from "react";
import Downshift from "downshift";
import { Col, Row } from "react-grid-system";

import { tags } from "../data/tags";
import { SearchAutoComplete, SearchButton, SearchField } from ".";

import type { ITag } from "../types";

interface IProps {
  initialValue?: string;
}

export const Search = (props: IProps) => {
  const { initialValue } = props;
  const [submitValue, setSubmitValue] = React.useState<ITag | undefined>(
    undefined
  );
  const itemToString = (tag: ITag) => (tag ? tag.label : "");

  return (
    <Row justify="center">
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
          const filteredTags = tags.filter(
            (tag) => !inputValue || tag.label.includes(inputValue)
          );
          const isVisible = !!(inputValue && inputValue.length > 2 && isOpen);
          const isSubmittable =
            selectedItem && selectedItem.label === inputValue;

          return (
            <>
              <Col sm={8} {...getRootProps({}, { suppressRefError: true })}>
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
              <Col sm={3}>
                <SearchButton
                  submitValue={submitValue}
                  isSubmittable={isSubmittable}
                />
              </Col>
            </>
          );
        }}
      </Downshift>
    </Row>
  );
};
