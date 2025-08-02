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
        },
        AccountProfile: {
            screen: AccountProfileScreen,
            options: {
                headerTitle: "Account Profile"
            }
        },
        ContactUs: {
            screen: ContactUsScreen,
            options: {
                headerTitle: "Contact Us"
            }
        },
        TermsOfUse: {
            screen: TermsOfUseScreen,
            options: {
                headerTitle: "Terms Of Use"
            }
        },
        PrivacyPolicy: {
            screen: PrivacyPolicyScreen,
            options: {
                headerTitle: "Privacy Policy"
            }
        },
    },
});

export default createStaticNavigation(RootStack);