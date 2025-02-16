import { useQuery } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { Item } from "../../../../Libs/src/types/DB/item.type";
import { ItemsContext } from "./ItemsContext";
import { fetchItems } from "./functions";

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data: items = [] } = useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: fetchItems,
    onSuccess: (data) => console.log("Fetched items:", data),
    onError: (err) => console.error("Error fetching items:", err),
  });

  return (
    <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
  );
};
export { ItemsProvider };
