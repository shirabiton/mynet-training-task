import { FC, useContext } from "react";
import ItemCard from "../../components/ItemCard";
import { ItemsContext } from "../../contexts/ItemContext/ItemsContext";
import Item from "../../types/item.type";
import useStyles from "./styles";

const ItemsPage: FC = () => {
    const classes = useStyles();
    const items: Item[] = useContext(ItemsContext);

    return <div className={classes.ulContainer}>
        <ul>
            {items && items.map((item, index) =>
            (<li key={index}>
                <ItemCard item={item} index={index}></ItemCard>
            </li>))
            }
        </ul>
    </div>
};

export default ItemsPage;