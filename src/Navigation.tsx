import React from "react";
import {createStaticNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

/** SCREENS */
import LoginScreen from "@/screens/Login";
import DashboardScreen from "@/screens/Dashboard";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screens: {
        Login: {
            screen: LoginScreen,
            options: {
                headerShown: false
            }
        },
        Dashboard: {
            screen: DashboardScreen,
            options: {
                headerTitle: "Health Portal"
            }
        }
    },
});

export default createStaticNavigation(RootStack);