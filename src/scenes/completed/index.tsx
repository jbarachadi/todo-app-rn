import React from "react";
import { SafeAreaView } from "react-native";

import { Header, Input } from "components/molecules";
import { List } from "components/organisms";
import { ClearButton } from "components/atoms";

import { Styles } from "styles";

export const CompletedScreen = () => (
    <SafeAreaView style={Styles.container}>
        <Header />
        <Input />
        <List status="completed" />
        <ClearButton />
    </SafeAreaView>
);
