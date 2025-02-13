import { Item } from "@Libs/types/DB/item.type";
import { ItemRepository } from "./item.repository";

export const ItemManager = {
  getAll: async (): Promise<Item[]> => {
    return await ItemRepository.getAll();
  },
  getItemById: async (id: string): Promise<Item | null> => {
    return await ItemRepository.getItemById(id);
  },
};
