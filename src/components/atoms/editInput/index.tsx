import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { editInput } from "actions";

import { todo } from "assets";

interface IInputFieldComponent {
    id: number;
    holder: string;
}

export const EditInput = ({ id, holder }: IInputFieldComponent) => {
    const text: string = useSelector(
        (s: any) => s.items.find((e: todo) => e.id === id).text
    );

    const dispatch = useDispatch();

    return (
        <TextInput
            placeholder={holder}
            style={Styles.editInput}
            value={text}
            onChangeText={(e) => dispatch(editInput(id, e))}
        />
    );
};

const Styles = StyleSheet.create({
    editInput: {
        left: 12,
        fontSize: 16,
        height: 24,
    },
});
