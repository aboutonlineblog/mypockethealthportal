import React from "react";
import {
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    ImageBackground,
} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import AppBG from "@/assets/bg.jpg";
import {useOnBoarding} from "./hooks";

/** SUB-SCREENS */
import BirthdatePicker from "./OnBoardingScreens/Birthdate";

const OnBoarding = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {_onNextPage, currentOnBoardingPage, _onFinishedOnBoarding, _onGetAge} = useOnBoarding();

    return (
        <ImageBackground source={AppBG} style={Styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Styles.formContainer}>

                    <Text style={Styles.screenTitle}>{`Setup your\nprofile`}</Text>
                    <Text style={Styles.screenDesc}>{`Completing your profile ensures a\nmore secure, efficient, and personalized\nexperience within the platform.
                    `}</Text>

                    <View style={Styles.bulletsContainer}>
                        <View style={Styles.bulletsSelected} />
                        <View style={Styles.bullets} />
                    </View>

                    <View style={Styles.formWrapper}>
                        {currentOnBoardingPage === 0 ? (
                            <BirthdatePicker onNext={_onNextPage} onChange={_onGetAge} />
                        ) : <View onLayout={_onFinishedOnBoarding} />}
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

export default OnBoarding;