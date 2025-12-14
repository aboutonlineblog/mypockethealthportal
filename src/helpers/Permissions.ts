import {PermissionsAndroid, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestNotificationPermission() {
    try {
        if (Platform.OS !== 'android') return true;

        if (Platform.Version < 33) return true;

        const checkGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

        if(checkGranted === false) {
            const lastKnownPermission = await AsyncStorage.getItem("LAST_KNOWN_PERMISSION");

            if(lastKnownPermission && lastKnownPermission === 'never_ask_again') {
                return false;
            }

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
            );

            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                await AsyncStorage.removeItem("LAST_KNOWN_PERMISSION");
                return true;
            } else {
                /** STORE LAST KNOWN PERMISSION */
                await AsyncStorage.setItem("LAST_KNOWN_PERMISSION", granted);
                return false;
            }
        }

        return true;
    } catch (error) {
        console.log('error', error)
    }
}