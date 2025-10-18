import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";

const {width, height} = Dimensions.get("window");

const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            width,
            height: 60,
            borderBottomWidth: 1,
            borderColor: Colors.border_color,
            paddingHorizontal: 20,
            justifyContent: "center"
        },
        label: {
            fontWeight: "bold",
            fontSize: 14
        },
        menuBtn: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        iconContainer: {
            marginLeft: 20,
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center"
        }
    })
}

export default useStyles;