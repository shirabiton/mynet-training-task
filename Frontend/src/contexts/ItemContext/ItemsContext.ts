import { createContext } from "react";
import Item from "../../types/item.type";

export const ItemsContext = createContext<Item[]>([]);