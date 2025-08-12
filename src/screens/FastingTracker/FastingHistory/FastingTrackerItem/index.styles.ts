import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.2;

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            width,
            height: ITEM_HEIGHT,
            // borderBottomWidth: 1,
            // borderBottomColor: Colors.border_color,
            flexDirection: 'row'
        },
        trackerContainer: {
            width: width * 0.3,
            height: ITEM_HEIGHT,
            // borderRightWidth: 1,
            // borderRightColor: Colors.border_color,
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        timeStampContainer: {
            width: width * 0.7,
            height: ITEM_HEIGHT,
        },
        boxConnector: {
            height: ITEM_HEIGHT * 0.6,
            width: ITEM_HEIGHT * 0.4,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderTopColor: Colors.border_color,
            borderBottomColor: Colors.border_color,
            borderLeftColor: Colors.border_color,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: ITEM_HEIGHT * 0.4
        },
        fastingRangeContainer: {
            width: ITEM_HEIGHT * 0.4,
            height: ITEM_HEIGHT * 0.4,
            borderRadius: (ITEM_HEIGHT * 0.4) / 2,
            borderWidth: 2,
            borderColor: Colors.border_color,
            backgroundColor: Colors.app_bg_color,
            justifyContent: 'center',
            alignItems: 'center',
        },
        timeStampWrapper: {
            height: ITEM_HEIGHT / 2,
            width: width * 0.7,
            justifyContent: 'center',
            alignItems: 'flex-start',
            // borderWidth: 1,
            // borderColor: Colors.border_color,
        },
        displayTimeContainer: {
            height: (ITEM_HEIGHT / 2) * 0.9,
            width: (width * 0.7) * 0.95,
            borderWidth: 2,
            borderColor: Colors.border_color,
            borderRadius: 8,
            padding: 10,
            justifyContent: 'center'
        },
        startTimeContainer: {
            
        },
        endTimeContainer: {
            
        },
        rangeLabel: {
            fontWeight: 'bold',
            fontSize: 24
        },
        rangeLabelUnit: {
            fontSize: 12
        },
        timeTitleLabel: {
            fontSize: 12,
            fontWeight: 'bold'
        },
        timeStamp: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        dayDateStamp: {
            fontSize: 10,
            fontWeight: 'bold'
        }
    })
}