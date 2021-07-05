import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { editInput, editItem, refreshList } from "actions";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen, faSave } from "@fortawesome/free-solid-svg-icons";

import { PRIMARY } from "styles";

interface IEditButtonComponent {
    id: number;
}

export const EditButton = ({ id }: IEditButtonComponent) => {
    const edit: boolean = useSelector((s: any) => {
        if (id === s.edit.id) {
            return s.edit.status;
        } else {
            return false;
        }
    });

    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={Styles.editButton}
            activeOpacity={0.8}
            onPress={() => {
                dispatch(editItem(id));
                if (edit) dispatch(editInput(id, "fff"));
                dispatch(refreshList());
            }}
        >
            {edit ? (
                <FontAwesomeIcon size={24} icon={faSave} color={PRIMARY} />
            ) : (
                <FontAwesomeIcon size={24} icon={faPen} color={PRIMARY} />
            )}
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    editButton: {
        position: "absolute",
        top: 8,
        right: 42,
    },
});
