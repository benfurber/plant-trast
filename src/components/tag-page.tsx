import React from "react";
import { useParams } from "react-router";

import { Body, PlantList, Search } from ".";
import { tags } from "../data/tags";
import { Col, Row } from "react-grid-system";

export const TagPage = () => {
  const { slug } = useParams();
  const tag = tags.find((tag) => tag.slug === slug);

  if (tag === undefined) return <div>Nada</div>;

  const { label, plantCount, plantIds } = tag;

  return (
    <Body>
      <Search initialValue={tag.label} />
      <Row justify="center">
        <Col sm={10}>
          <h3 data-cy="tag-title">
            {label} ({plantCount})
          </h3>
          
          <PlantList plantIds={plantIds} />
        </Col>
      </Row>
    </Body>
  );
};
