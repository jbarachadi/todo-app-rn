import React from "react";
import { StyleSheet, View } from "react-native";

import { HeaderTitle, HeaderCounter } from "components/atoms";

import { PRIMARY } from "styles";

export const Header = () => (
    <View style={Styles.header}>
        <HeaderTitle />
        <HeaderCounter />
    </View>
);

const Styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 48,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        backgroundColor: PRIMARY,
    },
});
