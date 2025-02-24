import ItemService from "../../services/item-service";

export const fetchItems = async () => {
  return (
    JSON.parse(sessionStorage.getItem("items") ?? "null") ??
    (await ItemService.getItems().then((items) => {
      sessionStorage.setItem("items", JSON.stringify(items));
      
      return items;
    }))
  );
};
