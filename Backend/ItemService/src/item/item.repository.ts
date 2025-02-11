import { Item } from '@Libs/types/DB/item.type';
import fs from 'fs';

export const ItemRepository = {
    getAll: async (): Promise<Item[]> => {
        const data = fs.readFileSync('./src/mocks/items.json', 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData.data;
    },
    getItemById: async (id: string): Promise<Item | null> => {
        const items = await ItemRepository.getAll() || [];
        return items.find((item: Item) => item._id === id) || null;
    }
}