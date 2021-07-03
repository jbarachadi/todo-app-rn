import React from "react";
import { StyleSheet, Text } from "react-native";

interface IListTextProps {
    text: string;
    status: boolean;
}

export const ListText = ({ text, status }: IListTextProps) => (
    <Text style={status ? Styles.listTextStrike : Styles.listText}>{text}</Text>
);

const Styles = StyleSheet.create({
    listText: {
        fontSize: 16,
        paddingHorizontal: 12,
    },
    listTextStrike: {
        fontSize: 16,
        paddingHorizontal: 12,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
});
