import React from "react";
import { ScrollView } from "react-native";

import { useSelector } from "react-redux";

import { ListItem } from "components/molecules";

import { todo } from "assets";

interface IListComponent {
    status: string;
}

export const List = ({ status }: IListComponent) => {
    const data: Array<todo> =
        status === "active"
            ? useSelector((s: any) =>
                  s.items.filter((e: any) => e.status === false)
              )
            : status === "completed"
            ? useSelector((s: any) =>
                  s.items.filter((e: any) => e.status === true)
              )
            : useSelector((s: any) => s.items);

    return (
        <ScrollView style={{ flex: 1 }}>
            {data.map((elem: todo) => (
                <ListItem key={elem.id} elem={elem} />
            ))}
        </ScrollView>
    );
};
