import { Item } from "../../../../Libs/src/types/DB/item.type";
import { throwNotFoundError } from "../../../../Libs/src/server/errors/errors-generator";
import { ItemRepository } from "./item.repository";

export const ItemManager = {
  getAll: ItemRepository.getAll,

  getItemById: async (id: string): Promise<Item> => {
    const item = await ItemRepository.getItemById(id);

    return item ?? throwNotFoundError("Item does not exist");
  },
};
