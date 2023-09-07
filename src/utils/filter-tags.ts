import { ITag } from "../types";

export const filterTags = (tags: ITag[], inputValue: string | null): ITag[] => {
  if (inputValue === null) return []

  const downcasedInput = inputValue.toLowerCase()

  return tags
    .filter((tag) => !inputValue || tag.label.toLowerCase().includes(downcasedInput))
    .sort((a, b) => b.plantCount - a.plantCount);
};
