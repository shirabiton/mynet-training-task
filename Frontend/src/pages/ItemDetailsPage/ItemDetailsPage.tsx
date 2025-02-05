import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemImage from "../../components/ItemImage";
import { ItemsContext } from "../../contexts/ItemContext/ItemsContext";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";

const ItemDetailsPage: FC = () => {
    const { index } = useParams();
    const classes = useStyles();
    const items = useContext(ItemsContext);
    const currentItem = items[Number(index)];
    const { t } = useTranslation("translation", { keyPrefix: "ITEM_NOT_FOUND" });

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

