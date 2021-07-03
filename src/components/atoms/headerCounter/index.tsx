import React from "react";
import { Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { WHITE } from "styles";

export const HeaderCounter = () => {
    const activeNumber: number = useSelector(
        (s: any) => s.items.filter((e: any) => e.status === false).length
    );

    return <Text style={Styles.headerCounter}>{activeNumber} items left</Text>;
};

const Styles = StyleSheet.create({
    headerCounter: {
        fontSize: 18,
        color: WHITE,
    },
});
