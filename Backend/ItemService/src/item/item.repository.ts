import axios from 'axios';
import { Item } from './../../../../Libs/src/types/DB/item.type';

export const ItemRepository = {
    getAll: async (): Promise<Item[]> => {
        return (await axios.get('mocks/items.json')).data.catch((err: unknown) => { throw err });
    },
    getItemById: async (id: string): Promise<Item> => {
        return (await axios.get('mocks/items.json')).data.find((item: Item) => item._id === id).catch((err: unknown) => { throw err });
    }
}