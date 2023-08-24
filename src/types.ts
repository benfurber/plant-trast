export interface ITag {
  id: string;
  label: string;
  slug: string;
  plantIds: PlantIds;
  plantCount: number;
}

export type PlantIds = string[];
