import { todo } from "assets";
import { storeData } from "services";

export const itemsReducer = (items: Array<todo> = [], action: any) => {
    switch (action.type) {
        case "INIT_ADD":
            items = action.items;

            return items;
        case "ADD_NEW":
            let newItem: todo = {
                id: items.length - 1 < 0 ? 0 : items[items.length - 1].id + 1,
                text: action.text,
                status: false,
            };

            items = [...items, newItem];

            storeData(items);

            return items;
        case "COMPLETED":
            items[
                items.indexOf(items.find((e) => e.id === action.id)!)
            ].status = !items.find((e) => e.id === action.id)?.status;

            storeData(items);

            return items;
        case "EDIT_INPUT":
            items[items.indexOf(items.find((e) => e.id === action.id)!)].text =
                action.text;

            storeData(items);

            return items;
        case "DELETE":
            items = items.filter((e) => e.id !== action.id);

            storeData(items);

            return items;
        case "CLEAR":
            items = items.filter((e) => e.status === false);

            storeData(items);

            return items;
        default:
            return items;
    }
};
