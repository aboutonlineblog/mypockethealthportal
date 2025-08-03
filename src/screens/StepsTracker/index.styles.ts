import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            width,
        }
    })
}