import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.screen_background,
            justifyContent: 'center',
            alignItems: 'center'
        },
        keyboardAvoidingView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        appTitleWrapper: {
            marginBottom: 20,
            width: useGlobalStyles().input.width,
            height: height * 0.075,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        appTitle: {
            fontWeight: 'bold',
            fontSize: 24
        }
    })
}