import config from '../config';
import HttpClient from '../utils/middlewares/http.client';
import { Item } from './../../../Libs/src/types/DB/item.type';

const { api } = config.endpoints.item;

const ItemService = {
    getItems: (): Promise<Item[]> => {
        return HttpClient.get(`${api}/items`);
    },
    getItemById: (id: string): Promise<Item> => {
        return HttpClient.get(`${api}/items/:${id}`);
    }
}
export default ItemService;