import React from "react";
import { SafeAreaView } from "react-native";

import { Header, Input } from "components/molecules";
import { List } from "components/organisms";

import { Styles } from "styles";

export const ActiveScreen = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <Header />
            <Input />
            <List status="active" />
        </SafeAreaView>
    );
};
