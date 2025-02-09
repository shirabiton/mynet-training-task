import axios from 'axios';
import { Item } from './../../../../Libs/src/types/DB/item.type';

export const ItemRepository = {
    getAll: async (): Promise<Item[]> => {
        console.log("in: itemRepository/getAll");
        const res = await axios.get('http://localhost:3000/Backend/itemService/public/mocks/items.json');
        console.log("res: 🥺", res);

        return res.data;
        // .catch((err: unknown) => { throw err });

        // return (await axios.get('mocks/items.json')).data.catch((err: unknown) => { throw err });
    },
    getItemById: async (id: string): Promise<Item> => {
        return (await axios.get('mocks/items.json')).data.find((item: Item) => item._id === id).catch((err: unknown) => { throw err });
    }
}
