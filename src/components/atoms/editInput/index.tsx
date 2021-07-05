import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { editInput, refreshList } from "actions";

import { todo } from "assets";
import { getData } from "reducers/items";

interface IInputFieldComponent {
    id: number;
    holder: string;
}

export const EditInput = ({ id, holder }: IInputFieldComponent) => {
    const [text, setText] = useState(holder);

    return (
        <TextInput
            placeholder={holder}
            style={Styles.editInput}
            value={text}
            onChangeText={(e) => {
                setText(e);
            }}
        />
    );
};

const Styles = StyleSheet.create({
    editInput: {
        left: 12,
        fontSize: 16,
        height: 24,
        width: "72%",
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 8,
    },
});
