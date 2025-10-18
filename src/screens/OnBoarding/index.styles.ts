import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.screen_background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        formContainer: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width,
            height,
            backgroundColor: 'rgba(255,255,255,0.7)',
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            paddingVertical: 30,
            paddingHorizontal: 20

        },
        formLabel: {
            fontWeight: 'bold',
            marginLeft: 17
        },
        input: {
            backgroundColor: Colors.screen_background,
            paddingHorizontal: 10
        },
        screenTitle: {
            fontSize: width * 0.125,
            fontWeight: 'bold',
            textAlign: 'left',
            color: Colors.tab_bg_color
        },
        screenDesc: {
            fontSize: 16,
            marginTop: 20,
            lineHeight: 20,
            color: Colors.tab_bg_color
        },
        bulletsContainer: {
            width: width * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
            marginBottom: 10,
            flexDirection: 'row'
        },
        bullets: {
            width: 16,
            height: 16,
            borderWidth: 2,
            borderRadius: 8,
            marginHorizontal: 2.5,
            borderColor: Colors.black
        },
        bulletsSelected: {
            width: 16,
            height: 16,
            borderWidth: 2,
            borderRadius: 8,
            marginHorizontal: 2.5,
            backgroundColor: Colors.black
        },
        formWrapper: {
            width: width * 0.9,
            height: height * 0.6,
        }
    })
}