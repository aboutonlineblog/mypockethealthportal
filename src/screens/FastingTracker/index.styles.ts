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
        actionsContainer: {
            width,
            height: height * 0.07,
        },
        counterContainer: {
            width,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        timerLabel: {
            position: 'absolute',
            zIndex: 9,
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 35
        },
        timeElapsedLabel: {
            fontSize: 16,
            fontWeight: 'normal',
        },
        startBtn: {
            marginTop: 20,
            width: width * 0.35,
            height: 50,
            backgroundColor: Colors.tab_bg_color,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: (width * 0.35) / 2
        },
        stopBtn: {
            marginTop: 20,
            width: width * 0.35,
            height: 50,
            backgroundColor: Colors.stop_color,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: (width * 0.35) / 2
        },
        startBtnLabel: {
            fontWeight: 'bold',
            color: Colors.screen_background,
            fontSize: 18
        },
        counterWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        timeStampContainer: {
            width: width * 0.8,
            height: height * 0.075,
            marginTop: 20,
            flexDirection: 'row'
        },
        timeStapContainerSections: {
            height: height * 0.075,
            justifyContent: 'center',
            alignItems: 'center',
        },
        centerSpace: {
            flex: 1,
        },
        timeStampLabel: {
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 'bold'
        },
        timeLabel: {
            fontSize: 18,
            fontWeight: 'bold',
            color: Colors.tab_bg_color
        },
        goalLabel: {
            fontWeight: 'bold',
            fontSize: 14,
            lineHeight: 60,
        },
        actionBtnsContainer: {
            height: (height * 0.07) * 1.1,
            width: ((height * 0.07) * 1.1) * 3,
            marginTop: 20,
            borderRadius: ( width * 0.5) / 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        flexCenterTop: {
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        actionBtns: {
            width: (height * 0.07) * 1.1,
            height: (height * 0.07) * 1.1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        actBtn: {
            width: (height * 0.07) * 1.1,
            height: (height * 0.07) * 1.1,
            borderRadius: ((height * 0.07) * 1.1) / 2,
            borderWidth: 5,
            backgroundColor: Colors.screen_background,
            borderColor: Colors.tab_bg_color,
            justifyContent: 'center',
            alignItems: 'center',
        },
        bgDecor: {
            height: ((height * 0.07) * 1.1) * 0.7,
            width: ((height * 0.07) * 1.1) * 2.75,
            backgroundColor: Colors.tab_bg_color,
            position: 'absolute',
            zIndex: 0
        },
        secondsSmall: {
            fontSize: 14
        }
    })
}