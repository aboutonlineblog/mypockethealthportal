import React from "react";
import {createStaticNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

/** SCREENS */
import LoginScreen from "@/screens/Login";
import DashboardScreen from "@/screens/Dashboard";
import FastingTrackerScreen from "@/screens/FastingTracker";
import StepsTrackerScreen from "@/screens/StepsTracker";
import MealPlannerScreen from "@/screens/MealPlanner";
import AccountProfileScreen from "@/screens/AccountProfile";
import ContactUsScreen from "@/screens/ContactUs";
import TermsOfUseScreen from "@/screens/TermsOfUse";
import PrivacyPolicyScreen from "@/screens/PrivacyPolicy";
import CreateAccountScreen from "@/screens/CreateAccount";
import OnBoardingScreen from "@/screens/OnBoarding";

/** SUB SCREEN */
import FastingTrackerHistoryScreen from "@/screens/FastingTracker/FastingHistory";

/** CONFIG */
import {Colors} from "@/config/theme";

const ScreenOptions = (title: string) => {
    return {
        headerTitle: title,
        headerShadowVisible: false,
        headerStyle: {
            backgroundColor: Colors.screen_background
        },
    }
}

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screens: {
        Login: {
            screen: LoginScreen,
            options: {
                headerShown: false
            }
        },
        CreateAccount: {
            screen: CreateAccountScreen,
            options: {
                headerShown: false
            }
        },
        OnBoarding: {
            screen: OnBoardingScreen,
            options: {
                headerShown: false
            }
        },
        Dashboard: {
            screen: DashboardScreen,
            options: ScreenOptions("Health Portal"),
        },
        FastingTracker: {
            screen: FastingTrackerScreen,
            options: ScreenOptions("Fasting Tracker"),
        },
        FastingTrackerHistory: {
            screen: FastingTrackerHistoryScreen,
            options: ScreenOptions("Fasting History"),
        },
        StepsTracker: {
            screen: StepsTrackerScreen,
            options: ScreenOptions("Steps Tracker"),
        },
        MealPlanner: {
            screen: MealPlannerScreen,
            options: ScreenOptions("Meal Planner"),
        },
        AccountProfile: {
            screen: AccountProfileScreen,
            options: ScreenOptions("Account Profile"),
        },
        ContactUs: {
            screen: ContactUsScreen,
            options: ScreenOptions("Contact Us"),
        },
        TermsOfUse: {
            screen: TermsOfUseScreen,
            options: ScreenOptions("Terms Of Use"),
        },
        PrivacyPolicy: {
            screen: PrivacyPolicyScreen,
            options: ScreenOptions("Privacy Policy"),
        },
    },
});

export default createStaticNavigation(RootStack);