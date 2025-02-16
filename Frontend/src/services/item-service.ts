import axios from "axios";
import config from "../config";
import { Item } from "./../../../Libs/src/types/DB/item.type";

const { api } = config.endpoints.item;

const ItemService = {
  getItems: async (): Promise<Item[]> => {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${api}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return res.data;
  },
  getItemById: async (id: string): Promise<Item> => {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${api}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return res.data;
  },
};
export default ItemService;
