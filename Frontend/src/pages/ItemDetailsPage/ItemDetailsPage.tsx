import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Item } from "../../../../Libs/src/types/DB/item.type";
import ItemImage from "../../components/ItemImage";
import ItemService from "../../services/item-service";
import useStyles from "./styles";

const ItemDetailsPage: FC = () => {
  const { itemId } = useParams();
  const classes = useStyles();
  const { t: tNotFound } = useTranslation("translation", { keyPrefix: "ITEM_NOT_FOUND" });
  const { t: tQuery } = useTranslation("translation", { keyPrefix: "QUERY_MESSAGES" });
  const {
    data: currentItem = null,
    isLoading,
    isError,
    error,
  } = useQuery<Item>({
    queryKey: ["item", itemId],
    queryFn: () => ItemService.getItemById(String(itemId)),
  });

  return (
    <div className={classes.singleItemContainer}>
      {isLoading ? (<div>{tQuery("LOADING_MESSAGE")}</div>)
        : isError && error instanceof Error ? (<p>{tQuery("ERROR_MESSAGE")}: {error.message}</p>)
          : (currentItem ? (
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
            <p>{tNotFound("TEXT")}</p>
          ))}
    </div>
  );
};

export default ItemDetailsPage;
