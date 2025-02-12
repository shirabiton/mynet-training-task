import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemImage from "../../components/ItemImage";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Item } from "../../../../Libs/src/types/DB/item.type";

const ItemDetailsPage: FC = () => {
    const { itemId } = useParams();
    const classes = useStyles();
    const { t } = useTranslation("translation", { keyPrefix: "ITEM_NOT_FOUND" });
    const [currentItem, setCurrentItem] = useState<Item | null>(null);
    useEffect(() => {
        const fetchItemById = async () => {
            const response = await axios.get(`${import.meta.env.VITE_ITEM_BASE_URL || "http://localhost:3001"}/items/${itemId}`);
            setCurrentItem(response.data);
        }
        fetchItemById();
    }, [itemId])

    return <div className={classes.singleItemContainer}>
        {currentItem ?
            (<div className={classes.singleItem}>
                <h1>{currentItem.title}</h1>
                <ItemImage image={currentItem.content} title={currentItem.title}></ItemImage>
                <span className={classes.metaData}>
                    <p>{currentItem.metaData.publisher}</p>
                    <p>{currentItem.metaData.date}</p>
                </span>
            </div>) : (<p>{t("TEXT")}</p>)}
    </div>
}

export default ItemDetailsPage;

