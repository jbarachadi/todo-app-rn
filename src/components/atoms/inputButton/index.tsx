import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { useDispatch } from "react-redux";
import { addItem } from "actions";

import { PRIMARY, WHITE } from "styles";

interface IInputButtonComponent {
    input: string;
}

export const InputButton = ({ input }: IInputButtonComponent) => {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={Styles.inputButton}
            onPress={() => dispatch(addItem(input))}
        >
            <Text style={Styles.inputButtonText}>Add</Text>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    inputButton: {
        position: "absolute",
        right: 18,
        top: 24,
        width: 38,
        height: 38,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: PRIMARY,
    },
    inputButtonText: {
        color: WHITE,
        fontWeight: "bold",
    },
});
