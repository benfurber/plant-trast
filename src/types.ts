type Id = string;

export interface IPlant {
  id: Id;
  name: string;
  link: string;
  price: string;
  image?: string;
  tags: string[];
  source: string;
}

export interface ITag {
  id: Id;
  label: string;
  slug: string;
  plantIds: PlantIds;
  plantCount: number;
}

export type PlantIds = string[];
