import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            backgroundColor: Colors.screen_background
        },
        scrollView: {
            flex: 1
        }
    })
}