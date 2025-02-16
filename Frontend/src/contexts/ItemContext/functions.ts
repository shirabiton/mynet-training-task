import ItemService from "../../services/item-service";

export const fetchItems = async () => {
  try {
    return await ItemService.getItems();
  } catch (error) {
    console.log(error);
    return [];
  }
};
