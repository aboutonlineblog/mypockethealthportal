import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            width: width * 0.9,
            height: useGlobalStyles().input.height,
            borderWidth: 1,
            borderColor: Colors.text_dark_color,
            borderRadius: (width * 0.9) / 2,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center'
        },
        inputContainer: {
            flex: 1,
        },
        input: {
            flex: 1,
            paddingHorizontal: 10
        },
        iconContainer: {
            height: useGlobalStyles().input.height,
            width: useGlobalStyles().input.height,
            justifyContent: "center",
            alignItems: "center"
        },
        dropDownContainer: {
            width: width * 0.89,
            height: 200,
            position: "absolute",
            zIndex: 999,
            top: useGlobalStyles().input.height,
            borderWidth: 1,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: Colors.screen_background
        },
        pickerItemStyle: {
            width: "100%",
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border_color
        },
        pickerLastItemStyle: {
            width: "100%",
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: 10,
            borderBottomColor: Colors.border_color
        }
    })
}