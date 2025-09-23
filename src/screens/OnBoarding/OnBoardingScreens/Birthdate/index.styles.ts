import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerStyle: {
            fontWeight: 'bold',
            fontSize: (width * 0.9) * 0.075,
            color: Colors.black
        },
        headerDescStyle: {
            color: Colors.black,
            fontSize: 16,
            textAlign: 'center'
        },
        pickerContainer: {
            width: width * 0.8,
            height: useGlobalStyles().input.height,
            backgroundColor: Colors.screen_background,
            marginVertical: 20,
            borderWidth: 1,
            borderColor: Colors.black,
            borderRadius: (width * 0.8) / 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            overflow: 'hidden'
        },
        pickerItemsContainer: {
            width: width * 0.8,
            position: 'absolute',
            zIndex: 9,
            maxHeight: useGlobalStyles().input.height * 7,
            minHeight: useGlobalStyles().input.height,
            backgroundColor: Colors.screen_background,
            top: 65,
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden'
        },
        calendarContainer: {
            width: width * 0.8,
            position: 'absolute',
            zIndex: 9,
            height: useGlobalStyles().input.height * 7.25,
            backgroundColor: Colors.screen_background,
            top: 65,
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
        },
        pickerItem: {
            width: '100%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: Colors.app_bg_color
        },
        birthdateLabel: {
            fontSize: useGlobalStyles().input.height * 0.6,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        birthdateLabelContainer: {
            flex: 1,
            height: useGlobalStyles().input.height,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
        },
        label: {
            textDecorationLine: 'underline'
        },
        footer: {
            flex: 1,
            width: width * 0.8,
            justifyContent: 'flex-end'
        },
        buttonsContainer: {
            width: width * 0.8,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        footerButton: {
            width: (width * 0.8) * 0.35,
            height: 40,
            backgroundColor: Colors.black,
            borderRadius: ((width * 0.8) * 0.35) / 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerButtonLabel: {
            color: Colors.screen_background,
            fontWeight: 'bold'
        },
        calendarButton: {
            height: useGlobalStyles().input.height,
            width: useGlobalStyles().input.height * 1.2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        pickerItemLabel: {
            fontWeight: 'bold',
            fontSize: 16
        },
        calendarHeader: {
            height: 40,
            flexDirection: 'row',
            width: '100%',
        },
        calendarHeaderButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        calendarHeaderButtonLabel: {
            fontWeight: 'bold',
            fontSize: 16
        }
    })
}