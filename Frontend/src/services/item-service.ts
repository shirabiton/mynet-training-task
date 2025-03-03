import axios from "axios";
import config from "../config";
import { Item } from "./../../../Libs/src/types/DB/item.type";

const { api } = config.endpoints.item;

const ItemService = {
  getItems: async (): Promise<Item[]> => {
    const res = await axios.get(`${api}`, {
      withCredentials: true,
    });

    return res.data;
  },
  getItemById: async (id: string): Promise<Item> => {
    const res = await axios.get(`${api}/${id}`, {
      withCredentials: true,
    });

    return res.data;
  },
};
export default ItemService;
