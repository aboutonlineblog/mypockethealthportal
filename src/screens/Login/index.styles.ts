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
            justifyContent: 'center',
            alignItems: 'center',
            width,
            height,
            backgroundColor: 'rgba(255,255,255,0.5)',
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0
        },
        keyboardAvoidingView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        appTitleWrapper: {
            marginBottom: 20,
            width: useGlobalStyles().input.width,
            height: height * 0.075,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        appLogoWrapper: {
            marginBottom: 20,
            width: useGlobalStyles().input.width * 0.65,
            height: useGlobalStyles().input.width * 0.65,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        appTitle: {
            fontWeight: 'bold',
            fontSize: 24
        },
        input: {
            backgroundColor: Colors.screen_background,
            paddingHorizontal: 10
        },
        googleSignInButton: {backgroundColor: "#fff", borderWidth: 1},
        googleSignInButtonLabel: {
            color: "#000000",
            marginTop: 2
        },
        footerContainer: {
            width,
            position: 'absolute',
            zIndex: 1,
            bottom: height - (height * 0.9),
            justifyContent: 'center',
            alignItems: 'center',
        },
        copyrightText: {
            fontSize: 10,
            textAlign: 'center'
        },
        versionText: {
            fontSize: 12
        },
        logoStyle: {
            width: useGlobalStyles().input.width * 0.65,
            height: useGlobalStyles().input.width * 0.65,
        },
        formLabel: {
            fontWeight: 'bold',
            marginLeft: 17
        },
        inputWrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: useGlobalStyles().input.width / 2,
            borderWidth: 1
        },
        showPassBtn: {
            width: useGlobalStyles().input.height * 0.9,
            height: useGlobalStyles().input.height * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
}