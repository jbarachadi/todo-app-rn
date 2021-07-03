import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { clearCompleted } from "actions";

import { WHITE } from "styles";

export const ClearButton = () => {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={Styles.clearButton}
            activeOpacity={0.8}
            onPress={() => dispatch(clearCompleted())}
        >
            <Text style={Styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    clearButton: {
        paddingVertical: 2,
        paddingHorizontal: 12,
        alignSelf: "center",
        alignItems: "center",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: "red",
    },
    clearButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: WHITE,
    },
});
