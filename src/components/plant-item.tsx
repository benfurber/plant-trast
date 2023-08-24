import React from "react";

import type { IPlant } from "../types";

interface IProps {
  plant: IPlant;
}

export const PlantItem = (props: IProps) => {
  const { link, name, price, source } = props.plant;
  return (
    <li>
      <a href={link}>
        <strong>{name}</strong> from {source} for <strong>£{price}</strong>
      </a>
    </li>
  );
};
