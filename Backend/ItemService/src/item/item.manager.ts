import { Item } from "@Libs/types/DB/item.type";
import { ItemRepository } from "./item.repository";

export const ItemManager = {
  getAll: async (): Promise<Item[]> => await ItemRepository.getAll(),

  getItemById: async (id: string): Promise<Item | null> =>
    await ItemRepository.getItemById(id),
};
