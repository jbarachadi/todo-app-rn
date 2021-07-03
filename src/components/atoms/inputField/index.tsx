import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { useDispatch, useSelector } from "react-redux";

export const InputField = () => {
    const text: string = useSelector((s: any) => s.text);

    const dispatch = useDispatch();

    return (
        <TextInput
            style={Styles.inputField}
            placeholder="What do you need to do ?"
            value={text}
            onChange={(e) => dispatch(e)}
        />
    );
};

const Styles = StyleSheet.create({
    inputField: {
        height: 50,
        paddingHorizontal: 24,
        marginHorizontal: 12,
        marginTop: 18,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 25,
    },
});
