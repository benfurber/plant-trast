import { filterTags } from "./";

const tags = [
  {
    label: "Palm 1",
    id: "234",
    slug: "palm-1",
    plantIds: ["12", "55"],
    plantCount: 2,
  },
  {
    label: "palm 2",
    id: "235",
    slug: "palm-2",
    plantIds: ["12", "55", "76"],
    plantCount: 3,
  },
  {
    label: "other",
    id: "4562",
    slug: "palm-1",
    plantIds: ["647"],
    plantCount: 1,
  },
];

describe("filterTags", () => {
    it("returns the tags which match the downcase input value", () => {
      const inputValue = "pal";
  
      const expectation = [tags[1], tags[0]];
  
      expect(filterTags(tags, inputValue)).toEqual(expectation);
    });

    it("returns the tags which match the upcase input value", () => {
      const inputValue = "PAL";
  
      const expectation = [tags[1], tags[0]];
  
      expect(filterTags(tags, inputValue)).toEqual(expectation);
    });

    it("returns empty array when nothing matches", () => {
      const inputValue = 'aaaa';
    
      expect(filterTags(tags, inputValue)).toEqual([]);
    });

    it("returns empty array for empty input value", () => {
      const inputValue = null;
    
      expect(filterTags(tags, inputValue)).toEqual([]);
    });

  });
