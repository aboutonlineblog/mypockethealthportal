import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            padding: 10,
            flex: 1
        },
        scrollView: {
            flex: 1
        }
    })
}