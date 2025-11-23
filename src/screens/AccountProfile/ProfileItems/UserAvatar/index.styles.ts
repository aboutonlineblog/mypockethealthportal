import {StyleSheet, Dimensions, ViewStyle} from "react-native";
import {Colors} from "@/config/theme";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            width,
            height: width / 2,
            justifyContent: "center",
            alignItems: "center"
        },
        avatarWrapper: {
            width: width * 0.3,
            height: width * 0.3,
            borderRadius: (width * 0.3) / 2,
            borderWidth: 3,
            borderColor: Colors.button_color_normal,
            backgroundColor: Colors.light_color,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        },
        avatar: {
            width: width * 0.3,
            height: width * 0.3,
        },
        avatarChar: {
            fontWeight: "bold",
            fontSize: (width * 0.3) * 0.5,
            color: "#fff"
        },
        name: {
            marginTop: 10,
            fontWeight: "bold",
            fontSize: 20,
            color: Colors.text_dark_color
        },
        updateProfileBtn: {
            width: 40,
            height: 40,
            borderRadius: 20,
            overflow: "hidden",
            position: "absolute",
            zIndex: 2,
            backgroundColor: Colors.button_color_normal,
            bottom: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center"
        }
    })
}

export const randomBGColor = (backgroundColor: string): ViewStyle => ({
    backgroundColor
});