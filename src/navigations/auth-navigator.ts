import { createStackNavigator } from "react-navigation-stack";
import { StackNavigationConfig } from "react-navigation-stack/lib/typescript/src/vendor/types";

import { LoginScreen } from "scenes";

const AuthNavigatorConfig = {
    initialRouteName: "Login",
    header: null,
    headerMode: "none",
} as StackNavigationConfig;

const RouteConfigs = {
    Login: LoginScreen,
};

export const AuthNavigator = createStackNavigator(
    RouteConfigs,
    AuthNavigatorConfig
);
