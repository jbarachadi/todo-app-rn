import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { changeStatus, editItem } from "actions";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import {
    ListText,
    DeleteButton,
    EditButton,
    EditInput,
} from "components/atoms";

import { PRIMARY } from "styles";

import { todo } from "assets";

export interface IListItemProps {
    elem: todo;
}

export const ListItem = ({ elem }: IListItemProps) => {
    const edit: boolean = useSelector((s: any) => {
        if (elem.id === s.edit.id) {
            return s.edit.status;
        } else {
            return false;
        }
    });

    const completed: boolean = useSelector((s: any) => {
        return s.items[
            s.items.indexOf(s.items.find((e: todo) => e.id === elem.id))
        ]?.status;
    });

    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={Styles.listItem}
            activeOpacity={0.8}
            onPress={() => {
                dispatch(changeStatus(elem.id));
                if (edit) {
                    dispatch(editItem(elem.id));
                }
            }}
        >
            <FontAwesomeIcon
                size={24}
                icon={completed ? faCheckCircle : faCircle}
                color={PRIMARY}
            />
            {edit && !completed ? (
                <EditInput id={elem.id} holder={elem.text} />
            ) : (
                <ListText text={elem.text} status={elem.status} />
            )}
            {completed ? <></> : <EditButton id={elem.id} />}
            <DeleteButton id={elem.id} />
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    listItem: {
        width: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        marginHorizontal: 12,
        marginVertical: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 25,
    },
});
