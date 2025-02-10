import { useQuery } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { Item } from '../../../../Libs/src/types/DB/item.type';
import { ItemsContext } from './ItemsContext';
import { fetchItems } from './functions';

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data: items = [] } = useQuery<Item[]>({ queryKey: ['items'], queryFn: fetchItems });
  return <ItemsContext.Provider value={items}>
    {children}
  </ItemsContext.Provider>
}
export { ItemsProvider };