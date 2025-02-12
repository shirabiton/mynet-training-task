import { useQuery } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { Item } from '../../../../Libs/src/types/DB/item.type';
import ItemService from '../../services/item-service';
import { ItemsContext } from './ItemsContext';

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const { data: items = [] } = useQuery<Item[]>({ queryKey: ['items'], queryFn: () => { return []; } });
  const { data: items = [] } = useQuery<Item[]>({ queryKey: ['items'], queryFn: ItemService.getItems });


  return <ItemsContext.Provider value={items}>
    {children}
  </ItemsContext.Provider>
}
export { ItemsProvider };