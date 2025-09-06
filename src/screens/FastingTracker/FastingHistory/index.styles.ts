import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.screen_background
        },
        listStyle: {paddingTop: 10},
        footerLoader: {
            marginTop: 5,
            marginBottom: 10,
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'absolute',
            bottom: 85,
            alignSelf: 'center'
        },
        emptyMessageLabel: {
            fontSize: 16
        }
    })
}