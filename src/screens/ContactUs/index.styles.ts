import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        safeArea: {flex: 1},
        container: {
            flex: 1,
            backgroundColor: Colors.screen_background,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20
        },
        formContainer: {
            width: width * 0.9,
            height: "100%"
        },
    })
}