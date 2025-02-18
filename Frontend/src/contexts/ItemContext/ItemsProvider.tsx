/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useQuery } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Item } from "../../../../Libs/src/types/DB/item.type";
import { ItemsContext } from "./ItemsContext";
import { fetchItems } from "./functions";

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    data: items = [],
    isLoading,
    isError,
    error,
  } = useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: fetchItems,
  });
  const { t } = useTranslation("translation", { keyPrefix: "QUERY_MESSAGES" });

  {
    isLoading && <p>{t("LOADING_MESSAGE")}</p>;
  }

  {
    isError && error instanceof Error && (
      <p>
        {t("ERROR_MESSAGE")}: {error.message}
      </p>
    );
  }

  return (
    <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
  );
};
export { ItemsProvider };
