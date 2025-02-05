import { FC, ReactNode, useEffect, useState } from 'react';
import Item from '../../types/item.type';
import { fetchItems } from './functions';
import { ItemsContext } from './ItemsContext';

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems(setItems);
  }, []);

  return <ItemsContext.Provider value={items}>
    {children}
  </ItemsContext.Provider>
}
export { ItemsProvider };
