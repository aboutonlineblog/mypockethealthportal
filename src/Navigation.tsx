import React from "react";
import {createStaticNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

/** SCREENS */
import LoginScreen from "@/screens/Login";
import DashboardScreen from "@/screens/Dashboard";
import FastingTrackerScreen from "@/screens/FastingTracker";
import StepsTrackerScreen from "@/screens/StepsTracker";
import MealPlannerScreen from "@/screens/MealPlanner";

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
        },
        FastingTracker: {
            screen: FastingTrackerScreen,
            options: {
                headerTitle: "Fasting Tracker"
            }
        },
        StepsTracker: {
            screen: StepsTrackerScreen,
            options: {
                headerTitle: "Steps Tracker"
            }
        },
        MealPlanner: {
            screen: MealPlannerScreen,
            options: {
                headerTitle: "Meal Planner"
            }
        }
    },
});

export default createStaticNavigation(RootStack);