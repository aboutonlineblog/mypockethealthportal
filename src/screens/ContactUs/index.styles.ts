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
        btnStyle: {width: "100%"},
        thankyou: {
            fontWeight: "bold",
            fontSize: 26,
            color: Colors.tab_bg_color
        },
        iconWrapper: {
            width: 84,
            height: 84,
            marginBottom: 20
        },
        message: {
            fontSize: 18,
            color: Colors.dark_gray,
            textAlign: "center"
        },
        messageWrapper: {
            width: "85%",
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        backBtn: {
            width: "25%",
            marginTop: "10%",
        }
    })
}