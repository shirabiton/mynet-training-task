import ItemService from "../../services/item-service";

export const fetchItems = async () => {
  const data = sessionStorage.getItem("items");

  return data
    ? JSON.parse(data)
    : await ItemService.getItems().then((req) =>
        sessionStorage.setItem("items", JSON.stringify(req))
      );
};
