import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import { Styles } from "styles";

export interface ILoginScreenProps {
    navigation: any;
}

export const LoginScreen = ({ navigation }: ILoginScreenProps) => (
    <SafeAreaView style={Styles.container}>
        <Text>Screen: Login</Text>
        <TouchableHighlight onPress={() => navigation.navigate("All")}>
            <Text>Go to home</Text>
        </TouchableHighlight>
    </SafeAreaView>
);
