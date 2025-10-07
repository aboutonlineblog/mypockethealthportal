import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "./theme";

const {width, height} = Dimensions.get("window");

export const useGlobalStyles = () => {
    const INPUT_HEIGHT = height * 0.05;
    const INPUT_WIDTH = width * 0.8;

    return StyleSheet.create({
        /** INPUT */
        input: {
            width: INPUT_WIDTH,
            height: INPUT_HEIGHT,
            borderRadius: INPUT_WIDTH / 2,
            borderWidth: 1
        },
        inputWithIcon: {
            width: INPUT_WIDTH * 0.81,
            height: INPUT_HEIGHT,
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
            borderRadius: INPUT_WIDTH / 2,
            overflow: 'hidden'
        },
        buttonLabel: {
            fontWeight: 'bold',
            color: Colors.button_label_color_normal
        },

        /** SPACES */
        mVSpace20: {
            marginHorizontal: 20
        },
        mRightSpace20: {
            marginRight: 20
        },
        mLeftSpace20: {
            marginLeft: 20
        },

        /** CONTAINERS */
        emptyDataContainer: {
            width,
            height: height * 0.84,
            justifyContent: 'center',
            alignItems: 'center',
        },

        /** TERMS OF SERVICE AND PRIVACY POLICY */
        title: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        heading: {
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 40
        },
        lastUpdateLabel: {
            fontSize: 14,
            marginBottom: 20,
            fontWeight: 'bold'
        },
        intro: {
            fontSize: 14,
            marginBottom: 10
        },
        sectionContainer: {
            marginVertical: 10
        },
        section: {
            
        },
        bullets: {
            paddingLeft: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        bullet: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "#000",
            marginRight: 10
        },
        highlight: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        normalSize: {
            fontSize: 14
        },
        bulletContainer: {
            marginBottom: 20
        },
        link: {
            color: 'blue',
            textDecorationLine: 'underline',
            fontWeight: 'bold'
        }
    })
}