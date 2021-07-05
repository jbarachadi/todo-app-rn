import { todo } from "assets";

import { getData, storeData } from "services";

var initialState: todo[] = [];

export const itemsReducer = (
    items: Array<todo> = initialState,
    action: any
) => {
    switch (action.type) {
        case "ADD":
            getData().then((e) => {
                let newItem: todo = {
                    id:
                        e.length != undefined
                            ? e.length - 1 < 0
                                ? 0
                                : e[e.length - 1].id + 1
                            : 0,
                    text: action.text,
                    status: false,
                };

                items = [...e, newItem];

                storeData(items);
            });

            return items;
        case "COMPLETED":
            getData().then((e) => {
                e.find((elem: todo) => elem.id === action.id).status = !e.find(
                    (elem: todo) => elem.id === action.id
                ).status;

                storeData(e);
            });

            return items;
        case "EDIT_INPUT":
            getData().then((e) => {
                e.find((elem: todo) => elem.id === action.id).text =
                    action.text;

                storeData(e);
            });

            return items;
        case "DELETE":
            getData().then((e) => {
                e = e.filter((elem: todo) => elem.id !== action.id);

                storeData(e);
            });

            return items;
        case "CLEAR":
            getData().then((e) => {
                e = e.filter((elem: todo) => elem.status === false);

                storeData(e);
            });

            return items;
        default:
            return items;
    }
};
