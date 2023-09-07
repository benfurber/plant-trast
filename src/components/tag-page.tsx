import React from "react";
import { Col, Row } from "react-grid-system";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

import { tags } from "../data/tags";
import { title } from "../labels";
import { Body, PlantList, Search } from ".";

export const TagPage = () => {
  const { slug } = useParams();
  const tag = tags.find((tag) => tag.slug === slug);

  if (tag === undefined) return <div>Nada</div>;

  const { label, plantCount, plantIds } = tag;

  return (
    <Body>
      <Helmet title={`${label}: ${title}`} />
      <Search initialValue={tag.label} />
      <Row justify="center">
        <Col sm={12}>
          <h3 data-cy="tag-title">
            {label} ({plantCount})
          </h3>

          <PlantList plantIds={plantIds} />
        </Col>
      </Row>
    </Body>
  );
};
