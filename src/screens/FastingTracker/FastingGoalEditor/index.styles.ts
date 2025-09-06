import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");
const CONTAINER_WIDTH = width * 0.9;
const CONTAINER_HEIGHT = width * 0.65;
const EDITOR_CONTAINER_HEIGHT = CONTAINER_HEIGHT * 0.5;

export const useStyles = () => {    
    return StyleSheet.create({
        container: {
            width: CONTAINER_WIDTH,
            // height: CONTAINER_HEIGHT,
            backgroundColor: Colors.screen_background,
            borderRadius: 8,
            overflow: 'hidden'
        },
        headerContainer: {
            height: CONTAINER_HEIGHT * 0.2,
            width: CONTAINER_WIDTH,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000'
        },
        editorContainer: {
            height: EDITOR_CONTAINER_HEIGHT,
            width: CONTAINER_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputContainer: {
            width: CONTAINER_WIDTH * 0.95,
            height: EDITOR_CONTAINER_HEIGHT * 0.5,
            flexDirection: 'row'
        },
        saveButton: {
            width: CONTAINER_WIDTH * 0.95,
            height: EDITOR_CONTAINER_HEIGHT * 0.3,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: 10
        },
        saveBtnLabel: {
            fontWeight: 'bold',
            color: Colors.screen_background,
            fontSize: 16
        },
        inputWrapper: {
            height: EDITOR_CONTAINER_HEIGHT * 0.5,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        timeSeparator: {
            height: EDITOR_CONTAINER_HEIGHT * 0.5,
            width: (CONTAINER_WIDTH * 0.95) * 0.04,
            justifyContent: 'center',
            alignItems: 'center',
        },
        timeSeparatorLabel: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 10
        },
        goalInputValue: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center'
        },
        indicator: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000',
        },
        inputGoalStyle: {
            width: EDITOR_CONTAINER_HEIGHT * 0.5,
            height: EDITOR_CONTAINER_HEIGHT * 0.375,
            fontWeight: 'bold',
            fontSize: 40,
            padding: 0
        },
        timeTypeOption: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5
        },
        timeTypeOptionLabel: {
            fontSize: 12,
            color: Colors.black
        },
        timeTypeSelectionBtnContainer: {
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            overflow: 'hidden'
        },
        timeTypeSelectionSelected: {
            width: width * 0.2,
            height: 30,
            backgroundColor: Colors.active_radio_button,
            borderRadius: (width * 0.25) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal: 5,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: Colors.black,
        },
        timeTypeSelectionUnSelected: {
            width: width * 0.2,
            height: 30,
            borderRadius: (width * 0.25) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal: 5,
            flexDirection: 'row',
            borderWidth: 1
        },
        radioButtonLabel: {
            fontWeight: 'bold'
        },
        radioButton: {
            width: 16,
            height: 16,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: Colors.black,
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        radioBullet: {
            width: 9,
            height: 9,
            borderRadius: 4.5,
            backgroundColor: Colors.black,
        }
    })
}