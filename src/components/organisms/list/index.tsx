import React, { useEffect } from "react";
import { ScrollView } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { ListItem } from "components/molecules";

import { todo } from "assets";
import { getData } from "services";
import { initAdd } from "actions";

interface IListComponent {
    status: string;
}

export const List = ({ status }: IListComponent) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getData().then((e) => {
            if (e != undefined) {
                dispatch(initAdd(e));
            }
        });
    }, []);

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
