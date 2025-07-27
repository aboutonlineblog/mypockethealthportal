import {StyleSheet, Dimensions, ViewStyle} from "react-native";
import {Colors} from "../../../../../config/theme";

const {width, height} = Dimensions.get("window");

export const useStyles = () => {
    const ITEM_HEIGHT = height * 0.225;
    const SUB_ITEM_WIDTH = width * 0.95;

    return StyleSheet.create({
        container: {
            width,
            height: ITEM_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            overflow: 'hidden'
        },
        innerContainer: {
            width: SUB_ITEM_WIDTH,
            height: ITEM_HEIGHT,
            borderWidth: 1,
            borderColor: Colors.border_color,
            borderRadius: 8,
            overflow: 'hidden',
        },
        overlay: {
            width: SUB_ITEM_WIDTH,
            height: ITEM_HEIGHT,
            overflow: 'hidden',
            backgroundColor: 'rgba(0,0,0,0.4)',
            padding: 20
        },
        itemName: {
            color: Colors.button_label_color_normal,
            fontWeight: 'bold',
            fontSize: 28
        }
    })
}

export const itemSpace = (isLastItem?: boolean, index?: number): ViewStyle => ({
    marginBottom: isLastItem && isLastItem === true ? 15 : 0,
});