import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '@/config/theme';

/** TABS */
import AppsTab from "./Tabs/AppsTab";
import StatsTab from "./Tabs/DiaryTab";
import DiaryTab from "./Tabs/StatsTab";
import SettingsTab from "./Tabs/SettingsTab";

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
    focused: boolean;
    color: string;
    size: number;
}

const tabOptions = (tabName: string) => {
    return {
        headerShown: false,
        tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
            if(tabName === 'apps') {
                if(focused) {
                    return <Icon name="apps" size={25} color={Colors.tab_active_color} />;
                }
                return <Icon name="apps-outline" size={25} color={Colors.tab_inactive_color} />;
            }

            if(tabName === 'stats') {
                if(focused) {
                    return <Icon name="stats-chart" size={20} color={Colors.tab_active_color} />;
                }
                return <Icon name="stats-chart-outline" size={20} color={Colors.tab_inactive_color} />;
            }

            if(tabName === 'diary') {
                if(focused) {
                    return <Icon name="book" size={20} color={Colors.tab_active_color} />;
                }
                return <Icon name="book-outline" size={20} color={Colors.tab_inactive_color} />;
            }

            if(tabName === 'settings') {
                if(focused) {
                    return <Icon name="cog" size={25} color={Colors.tab_active_color} />;
                }
                return <Icon name="cog-outline" size={25} color={Colors.tab_inactive_color} />;
            }

            return null;
        },
        tabBarActiveTintColor: Colors.tab_active_color,
        tabBarInactiveTintColor: Colors.tab_inactive_color
    }
};

const Dashboard = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: Colors.tab_bg_color,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                },
            }}
        >
            <Tab.Screen name="Apps" component={AppsTab} options={tabOptions('apps')} />
            {/* <Tab.Screen name="Stats" component={StatsTab} options={tabOptions('stats')} /> */}
            {/* <Tab.Screen name="Diary" component={DiaryTab} options={tabOptions('diary')} /> */}
            <Tab.Screen name="Settings" component={SettingsTab} options={tabOptions('settings')} />
        </Tab.Navigator>
    )
}

export default Dashboard;