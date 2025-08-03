import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.1;
const STEP_DETAILS_SECTION_HEIGHT = ITEM_HEIGHT / 3;
const STEP_DETAILS_SECTION_CONTAINER_WIDTH =  width - ITEM_HEIGHT;

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            width,
            height: ITEM_HEIGHT,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border_color,
            flexDirection: 'row'
        },
        dayLabelContainer: {
            width: ITEM_HEIGHT,
            height: ITEM_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center'
        },
        dayLabelWrapper: {
            width: ITEM_HEIGHT * 0.85,
            height: ITEM_HEIGHT * 0.85,
            borderRadius: (ITEM_HEIGHT * 0.85) / 2,
            borderWidth: 2,
            borderColor: Colors.border_color,
            justifyContent: 'center',
            alignItems: 'center'
        },
        dateLabel: {
            fontSize: 26,
            fontWeight: 'bold'
        },
        dateLabelAbbre: {
            fontSize: 12,
            fontWeight: 'bold'
        },
        stepsDetailsContainer: {
            width: STEP_DETAILS_SECTION_CONTAINER_WIDTH,
            height: ITEM_HEIGHT,
        },
        stepsDetailsSection: {
            width: STEP_DETAILS_SECTION_CONTAINER_WIDTH,
            height: STEP_DETAILS_SECTION_HEIGHT,
            flexDirection: 'row',
            alignItems: 'center'
        },
        stepsDetailsSectionLabel: {
            fontSize: 12
        },
        progressContainer: {
            width: STEP_DETAILS_SECTION_CONTAINER_WIDTH * 0.975,
            height: STEP_DETAILS_SECTION_HEIGHT * 0.5,
            borderWidth: 1,
            borderRadius: (STEP_DETAILS_SECTION_CONTAINER_WIDTH * 0.975) / 2,
            borderColor: Colors.border_color,
            backgroundColor: Colors.border_color,
            overflow: 'hidden'
        },
        progressBar: {
            width: (STEP_DETAILS_SECTION_CONTAINER_WIDTH * 0.975) * 0.5,
            height: STEP_DETAILS_SECTION_HEIGHT * 0.5,
            borderColor: Colors.tab_active_color,
            backgroundColor: Colors.tab_active_color,
        },
        stepsActionButton: {
            height: STEP_DETAILS_SECTION_HEIGHT,
            width: STEP_DETAILS_SECTION_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10
        }
    })
}