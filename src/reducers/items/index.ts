import { todo } from "assets";

export const itemsReducer = (items: Array<todo> = [], action: any) => {
    switch (action.type) {
        case "ADD":
            let newItem: todo = {
                id: items.length - 1 < 0 ? 0 : items[items.length - 1].id + 1,
                text: action.text,
                status: false,
            };

            items = [...items, newItem];

            return items;
        case "COMPLETED":
            items[
                items.indexOf(items.find((e) => e.id === action.id)!)
            ].status = !items.find((e) => e.id === action.id)?.status;

            return items;
        case "EDIT_INPUT":
            items[items.indexOf(items.find((e) => e.id === action.id)!)].text =
                action.text;

            return items;
        case "DELETE":
            items = items.filter((e) => e.id !== action.id);

            return items;
        case "CLEAR":
            items = items.filter((e) => e.status === false);

            return items;
        default:
            return items;
    }
};
