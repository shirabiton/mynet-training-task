import { createContext } from "react";
import { Item } from "@Libs/types/DB/item.type";

export const ItemsContext = createContext<Item[]>([]);
