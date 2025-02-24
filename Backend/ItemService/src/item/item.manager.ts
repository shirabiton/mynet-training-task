import { Item } from "@Libs/types/DB/item.type";
import { throwNotFoundError } from "./../../../../Libs/src/utils/errors/errors-generator";
import { ItemRepository } from "./item.repository";

export const ItemManager = {
  getAll: ItemRepository.getAll,

  getItemById: async (id: string): Promise<Item> => {
    const item = await ItemRepository.getItemById(id);
    
    return item ?? throwNotFoundError("Item does not exist");
  },
};
