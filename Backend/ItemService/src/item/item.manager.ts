import { Item } from '../../../../Libs/src/types/DB/item.type';
import { ItemRepository } from './item.repository';

export const ItemManager = {
    getAll: async (): Promise<Item[]> => { return await ItemRepository.getAll(); },
    getItemById: async (id: string): Promise<Item> => { return await ItemRepository.getItemById(id); }
}