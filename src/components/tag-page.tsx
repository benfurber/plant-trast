import React from "react";
import { useParams } from "react-router";

import { Body, PlantList, Search } from ".";
import { tags } from "../data/tags";

export const TagPage = () => {
  const { slug } = useParams();
  const tag = tags.find((tag) => tag.slug === slug);

  if (tag === undefined) return <div>Nada</div>;

  const { label, plantCount, plantIds } = tag;

  return (
    <Body>
      <Search initialValue={tag.label} />
      <h1 data-cy="tag-title">
        {label} ({plantCount})
      </h1>
      <PlantList plantIds={plantIds} />
    </Body>
  );
};
