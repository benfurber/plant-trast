import React from "react";

import { PlantItem } from ".";
import { plants } from "../data/plants";

import type { PlantIds } from "../types";

interface IProps {
  plantIds: PlantIds;
}

export const PlantList = (props: IProps) => {
  const { plantIds } = props;

  return (
    <ul>
      {plantIds.map((id, index) => {
        const plant = plants.find((plant) => plant.id === id);
        if (plant) return <PlantItem key={index} plant={plant} />;
      })}
    </ul>
  );
};
