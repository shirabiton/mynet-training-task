import { Item } from "@Libs/types/DB/item.type";
import { HttpStatusCode } from "axios";
import { ItemRepository } from "./item.repository";

export const ItemManager = {
  getAll: ItemRepository.getAll,

  getItemById: async (id: string): Promise<Item> => {
    const item = await ItemRepository.getItemById(id);
    if (!item) {
      throw {
        message: "Item does not exist",
        code: HttpStatusCode.NotFound,
      };
    }
    return item;
  },
};
