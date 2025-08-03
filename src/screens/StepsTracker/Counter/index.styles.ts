import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            width,
            height: height * 0.25,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBlockColor: Colors.border_color
        },
        stepsLabel: {
            textAlign: 'center',
            fontWeight: 'bold'
        },
        counter: {
            fontSize: 42
        },
        dailyGoalLabel: {
            position: 'absolute',
            zIndex: 9,
            top: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5
        }
    })
}