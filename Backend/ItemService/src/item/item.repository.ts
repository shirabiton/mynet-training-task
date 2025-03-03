import { find, matchesProperty } from "lodash/fp";
import items from "../mocks/items.json";
import { Item } from "./../../../../Libs/src/types/DB/item.type";

export const ItemRepository = {
  getAll: async (): Promise<Item[]> => items,

  getItemById: async (id: string): Promise<Item | null> =>
    find(matchesProperty("_id", id), items) || null,
};
