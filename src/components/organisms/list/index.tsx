import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { useSelector } from "react-redux";

import { ListItem } from "components/molecules";

import { todo } from "assets";
import { getData } from "reducers/items";

interface IListComponent {
    status: string;
}

export const List = ({ status }: IListComponent) => {
    const [items, setItems] = useState([]);

    const refresh: boolean = useSelector((s: any) => s.refresh);

    useEffect(() => {
        getData().then((e) => {
            setItems(e);
            console.log(e);
        });
    }, [refresh]);

    const data: Array<todo> =
        status === "active"
            ? items.filter((e: any) => e.status === false)
            : status === "completed"
            ? items.filter((e: any) => e.status === true)
            : items;

    return (
        <ScrollView style={{ flex: 1 }}>
            {data.map((elem: todo) => (
                <ListItem key={elem.id} elem={elem} />
            ))}
        </ScrollView>
    );
};
