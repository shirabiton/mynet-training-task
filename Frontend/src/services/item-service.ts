import axios from 'axios';
import config from '../config';
import { Item } from './../../../Libs/src/types/DB/item.type';

const { api } = config.endpoints.item;

const ItemService = {
    getItems: async (): Promise<Item[]> => {
        console.log("api url:", api);
        // const res = await axios.get(`${api}`, { withCredentials: true });
        // console.log("on get items in frontend service, res:", res);
        const token = localStorage.getItem("token");  // או מ-cookie

        const res = await axios.get(`${api}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true  // אם אתה משתמש בקוקיז
        });

        return res.data;
    },
    getItemById: async (id: string): Promise<Item> => {
        const token = localStorage.getItem("token");  // או מ-cookie

        const res = await axios.get(`${api}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true  // אם אתה משתמש בקוקיז
        });

        return res.data;
    }
}
export default ItemService;