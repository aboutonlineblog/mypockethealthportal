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
import LoginBG from "@/screens/Login/assets/bg.jpg";

/** SUB-SCREENS */
import BirthdatePicker from "./OnBoardingScreens/Birthdate";

const OnBoarding = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();

    return (
        <ImageBackground source={LoginBG} style={Styles.container}>
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
                        <BirthdatePicker />
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

export default OnBoarding;