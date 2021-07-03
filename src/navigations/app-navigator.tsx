import React from "react";

import { createBottomTabNavigator } from "react-navigation-tabs";

import { ActiveScreen, CompletedScreen, HomeScreen } from "scenes";

import { TabBarIcon } from "components/atoms";

import { PRIMARY, SECONDARY, WHITE } from "styles";

interface ITintColor {
    tintColor: string;
}

const TabNavigatorConfig = {
    initialRouteName: "All",
    header: null,
    headerMode: "none",
    tabBarOptions: {
        activeTintColor: PRIMARY,
        inactiveTintColor: SECONDARY,
        style: {
            backgroundColor: WHITE,
        },
    },
};

const RouteConfigs = {
    All: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "All",
            tabBarIcon: ({ tintColor }: ITintColor) => (
                <TabBarIcon icon="all" color={tintColor} />
            ),
        },
    },
    Active: {
        screen: ActiveScreen,
        navigationOptions: {
            tabBarLabel: "Active",
            tabBarIcon: ({ tintColor }: ITintColor) => (
                <TabBarIcon icon="active" color={tintColor} />
            ),
        },
    },
    Completed: {
        screen: CompletedScreen,
        navigationOptions: {
            tabBarLabel: "Completed",
            tabBarIcon: ({ tintColor }: ITintColor) => (
                <TabBarIcon icon="completed" color={tintColor} />
            ),
        },
    },
};

export const AppNavigator = createBottomTabNavigator(
    RouteConfigs,
    TabNavigatorConfig
);
