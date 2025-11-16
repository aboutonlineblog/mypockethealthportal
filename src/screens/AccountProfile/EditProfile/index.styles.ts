import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.screen_background,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20
        },
        formLabel: {
            fontWeight: 'bold',
            marginLeft: 17,
            color: Colors.black
        },
        input: {
            backgroundColor: Colors.screen_background,
            paddingHorizontal: 10
        },
    })
}