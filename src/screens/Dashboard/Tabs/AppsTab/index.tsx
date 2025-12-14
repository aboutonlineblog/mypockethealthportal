import React, {useCallback} from "react";
import {View, FlatList, Alert, Platform, Linking} from "react-native";
import {RenderItemProps} from "./interafaces";
import {requestNotificationPermission} from "@/helpers/Permissions";

/** UTILS */
import AppList from "./app_list";
import useStyle from "./index.styles";

/** MODULES */
import AppListItem from "./AppListItem";

const AppsTab = () => {
    const Styles = useStyle();

    React.useEffect(() => {
        requestNotificationPermission().then((allowed: boolean | undefined) => {
            if(allowed !== undefined && allowed === false) {
                Alert.alert(
                    'Enable notifications to continue',
                    'Fasting tracking uses notifications to display elapsed time while the app is closed. Please enable notifications to proceed.\n\nSettings → App info → Notifications → Allow',
                    [
                        {text: 'Cancel', onPress: () => {}},
                        {text: 'Enable', onPress: async () => {
                            if (Platform.OS !== 'android') return;

                            try {
                                await Linking.openURL('package:' + 'com.mypockethealthportal');
                            } catch (e1) {
                                console.log("error1", e1)
                                try {
                                    await Linking.openURL('android.settings.APP_NOTIFICATION_SETTINGS');
                                } catch (e2) {
                                    console.log("error2", e2)
                                    try {
                                        await Linking.openSettings();
                                    } catch (e3) {
                                        console.log("error3", e3)
                                    }
                                }
                            }
                        }}
                    ]
                )
                return;
            }
        })
    }, [])

    const RenderItem = useCallback(({item, index}: RenderItemProps) => {
        const isLastItem = index === (AppList?.length - 1) ? true : false;
        const newItemData = {...item, isLastItem, index};

        return (
            <AppListItem {...newItemData} />
        )
    }, [])

    return (
        <View style={Styles.container}>
            <FlatList
                data={AppList}
                renderItem={RenderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default AppsTab;