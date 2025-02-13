import { useQuery } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { Item } from '../../../../Libs/src/types/DB/item.type';
import ItemService from '../../services/item-service';
import { ItemsContext } from './ItemsContext';

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {

  // const { data: items = [] } = useQuery<Item[]>({ queryKey: ['items'], queryFn: () => { return []; } });
  const ggetItems = async () => {
    console.log("Fetching items...");
    return await ItemService.getItems();
  };

  const { data: items = [] } = useQuery<Item[]>({
    queryKey: ['items'], queryFn: ggetItems, onSuccess: (data) => console.log("Fetched items:", data),
    onError: (err) => console.error("Error fetching items:", err)
  });

  return <ItemsContext.Provider value={items}>
    {children}
  </ItemsContext.Provider>
}
export { ItemsProvider };