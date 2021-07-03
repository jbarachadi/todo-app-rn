import React from "react";
import { SafeAreaView } from "react-native";

import { Header, Input } from "components/molecules";
import { List } from "components/organisms";

import { Styles } from "styles";

export const HomeScreen = () => (
    <SafeAreaView style={Styles.container}>
        <Header />
        <Input />
        <List status="all" />
    </SafeAreaView>
);
