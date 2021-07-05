import AsyncStorage from "@react-native-async-storage/async-storage";

import { todo } from "assets";

export const storeData = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("todos", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("todos");
        //console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

var initialState: todo[] = [];

export const itemsReducer = (
    items: Array<todo> = initialState,
    action: any
) => {
    /* storeData([
    { id: 0, text: "test1", status: true },
    { id: 1, text: "test2", status: false },
]).then(() =>
     getData().then((e) => {
        e.forEach((elem: any) => {
            items = [
                ...items,
                {
                    id: elem.id,
                    text: elem.text,
                    status: elem.status,
                },
            ];
            console.log(elem);
        });
        //console.log(items);
    });
    ); */
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
            /* items[
                items.indexOf(items.find((e) => e.id === action.id)!)
            ].status = !items.find((e) => e.id === action.id)?.status; */

            getData().then((e) => {
                e.find((elem: todo) => elem.id === action.id).status = !e.find(
                    (elem: todo) => elem.id === action.id
                ).status;

                storeData(e);
            });

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
