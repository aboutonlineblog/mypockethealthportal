import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "./theme";

const {width, height} = Dimensions.get("window");

export const useGlobalStyles = () => {
    const INPUT_HEIGHT = height * 0.05;
    const INPUT_WIDTH = width * 0.7;

    return StyleSheet.create({
        /** INPUT */
        input: {
            width: INPUT_WIDTH,
            height: INPUT_HEIGHT,
            borderRadius: 8,
            borderWidth: 1
        },
        inputWrapper: {
            marginVertical: 5
        },

        /** BUTTON */
        button: {
            width: INPUT_WIDTH,
            height: INPUT_HEIGHT,
            backgroundColor: Colors.button_color_normal,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
            borderRadius: 8,
        },
        buttonLabel: {
            fontWeight: 'bold',
            color: Colors.button_label_color_normal
        }
    })
}