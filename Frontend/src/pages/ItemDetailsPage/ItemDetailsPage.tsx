import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Item } from "../../../../Libs/src/types/DB/item.type";
import ItemImage from "../../components/ItemImage";
import ItemService from "../../services/item-service";
import useStyles from "./styles";

const ItemDetailsPage: FC = () => {
  const { itemId } = useParams();
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "ITEM_NOT_FOUND" });
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItemById = async () => {
      if (itemId) {
        const response = await ItemService.getItemById(itemId);
        if (response) {
          setCurrentItem(response);
        }
      }
    };
    fetchItemById();
  }, [itemId]);

  return (
    <div className={classes.singleItemContainer}>
      {currentItem ? (
        <div className={classes.singleItem}>
          <h1>{currentItem.title}</h1>
          <ItemImage
            image={currentItem.content}
            title={currentItem.title}
          ></ItemImage>
          <span className={classes.metaData}>
            <p>{currentItem.metaData.publisher}</p>
            <p>{currentItem.metaData.date}</p>
          </span>
        </div>
      ) : (
        <p>{t("TEXT")}</p>
      )}
    </div>
  );
};

export default ItemDetailsPage;
