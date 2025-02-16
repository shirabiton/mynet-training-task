import { FC, useContext } from "react";
import { Item } from "../../../../Libs/src/types/DB/item.type";
import ItemCard from "../../components/ItemCard";
import { ItemsContext } from "../../contexts/ItemContext/ItemsContext";
import useStyles from "./styles";

const ItemsPage: FC = () => {
  const items: Item[] = useContext(ItemsContext);
  const classes = useStyles();

  return (
    <div className={classes.ulContainer}>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item._id}>
              <ItemCard item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
