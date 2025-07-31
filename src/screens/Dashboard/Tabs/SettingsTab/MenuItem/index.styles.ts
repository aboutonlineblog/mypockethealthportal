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
            justifyContent: 'center'
        }
    })
}

export default useStyles;