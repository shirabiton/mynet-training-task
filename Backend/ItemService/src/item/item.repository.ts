import { Item } from "@Libs/types/DB/item.type";
import { find, matchesProperty } from "lodash/fp";
import items from "../mocks/items.json";

export const ItemRepository = {
  getAll: async (): Promise<Item[]> => items,

  getItemById: async (id: string): Promise<Item | null> =>
    find(matchesProperty("_id", id), items) || null,
};
