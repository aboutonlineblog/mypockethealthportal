import React from "react";
import {StatusBar} from "react-native";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

/** NAVIGATIONS */
import Navigation from "@/Navigation";

const queryClient = new QueryClient();

const MyPocketHealthPortal = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar barStyle="dark-content" />
            <Navigation />
        </QueryClientProvider>
    )
}

export default MyPocketHealthPortal;