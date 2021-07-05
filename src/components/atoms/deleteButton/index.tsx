import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { deleteItem } from "actions";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { PRIMARY } from "styles";

interface IDeleteButtonComponent {
    id: number;
}

export const DeleteButton = ({ id }: IDeleteButtonComponent) => {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={Styles.deleteButton}
            activeOpacity={0.8}
            onPress={() => dispatch(deleteItem(id))}
        >
            <FontAwesomeIcon size={24} icon={faTrashAlt} color={PRIMARY} />
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    deleteButton: {
        position: "absolute",
        top: 8,
        right: 12,
    },
});
