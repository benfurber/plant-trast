import React from "react";

import type { PlantIds } from "../types";

interface IProps {
  plantIds: PlantIds;
}
export const PlantList = (props: IProps) => {
  const { plantIds } = props;

  return (
    <ul>
      {plantIds.map((id, index) => {
        return <li key={index}>{id}</li>;
      })}
    </ul>
  );
};
