import Item from "../../types/item.type";

export const fetchItems = (setItems: (items: React.SetStateAction<Item[]>) => void) => {
    fetch('/items.mockup.json')
        .then((response) => response.json())
        .then((data) => setItems(data.items))
        .catch((error) => console.error('Error fetching data:', error));
}