import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Gambit",
  },
  {
    _id: uuid(),
    categoryName: "Opening",
  },
  {
    _id: uuid(),
    categoryName: "Endgame",
  },
  {
    _id: uuid(),
    categoryName: "Classic",
  },
  {
    _id: uuid(),
    categoryName: "Tactics",
  },
  {
    _id: uuid(),
    categoryName: "Tutorials",
  },
  {
    _id: uuid(),
    categoryName: "Puzzles",
  },
];
