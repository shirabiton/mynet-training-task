import { createContext } from "react";
import { Item } from "./../../../../Libs/src/types/DB/item.type";

export const ItemsContext = createContext<Item[]>([]);
