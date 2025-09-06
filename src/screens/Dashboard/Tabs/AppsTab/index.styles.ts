import {StyleSheet} from "react-native";

/** CONFIG */
import {Colors} from "@/config/theme";

const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.screen_background
        }
    })
}

export default useStyles;