import React from "react";
import { Text, StyleSheet } from "react-native";

import { WHITE } from "styles";

export const HeaderTitle = () => <Text style={Styles.headerTitle}>To-do</Text>;

const Styles = StyleSheet.create({
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: WHITE,
    },
});
