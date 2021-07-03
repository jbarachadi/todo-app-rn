import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { inputText } from "actions";

import { InputButton } from "components/atoms";

export const Input = () => {
    const text: string = useSelector((s: any) => s.text);

    const dispatch = useDispatch();

    return (
        <View>
            <TextInput
                style={Styles.inputField}
                placeholder="What do you need to do ?"
                value={text}
                onChangeText={(e) => dispatch(inputText(e))}
            />
            <InputButton input={text} />
        </View>
    );
};

const Styles = StyleSheet.create({
    inputField: {
        height: 50,
        paddingRight: 54,
        paddingLeft: 16,
        marginHorizontal: 12,
        marginTop: 18,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 25,
    },
});
