import { Item } from "@Libs/types/DB/item.type";
import items from "../mocks/items.json";

export const ItemRepository = {
  getAll: async (): Promise<Item[]> => items,

  getItemById: async (id: string): Promise<Item | null> =>
    items.find((item: Item) => item._id === id) || null,
};
