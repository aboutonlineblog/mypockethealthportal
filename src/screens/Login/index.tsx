import React from "react";
import {
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Platform, TextInput,
    ImageBackground, Image
} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {APP_TITLE, USE_APP_LOGO} from "@/config/app";
import Button from "@/modules/Button";
import {useLoginHooks} from "./hooks";
import LoginBG from "./assets/bg.jpg";
import GoogleIcon from "./assets/google_logo.png";
import PackageJSON from "../../../package.json";
import AppLogo from "./assets/app_logo.png";

const Login = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {_onGoogleLogin, _onLogin, _onChangeInputValue} = useLoginHooks();

    return (
        <ImageBackground source={LoginBG} style={Styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Styles.formContainer}>
                <KeyboardAvoidingView style={Styles.keyboardAvoidingView} behavior="padding">
                    {USE_APP_LOGO === true ? (<View style={Styles.appLogoWrapper}>
                        <Image source={AppLogo} resizeMode="contain" style={Styles.logoStyle} />
                    </View>) : (
                        <View style={Styles.appTitleWrapper}>
                            <Text style={Styles.appTitle}>{APP_TITLE}</Text>
                        </View>
                    )}

                    <View style={GlobalStyles.inputWrapper}>
                        <Text>Email</Text>
                        <TextInput 
                            autoCapitalize="none"
                            keyboardType="email-address"
                            autoComplete="off"
                            autoCorrect={false}
                            style={[GlobalStyles.input, Styles.input]} 
                            placeholder="Enter email address" 
                            placeholderTextColor="#b5b5b5"
                            onChangeText={(val: string) => _onChangeInputValue(val, 'email')} />
                    </View>
                    <View style={GlobalStyles.inputWrapper}>
                        <Text>Password</Text>
                        <TextInput 
                             style={[GlobalStyles.input, Styles.input]} 
                            placeholder="Enter password" 
                            placeholderTextColor="#b5b5b5"
                            secureTextEntry={true}
                            onChangeText={(val: string) => _onChangeInputValue(val, 'password')} />
                    </View>
                    <Button label="Login" onPress={_onLogin} />
                    <Button label="Create Account" onPress={_onLogin} />
                    <Text>or</Text>
                    <Button 
                        icon={GoogleIcon} 
                        label="Sign in with Google" 
                        buttonStyle={Styles.googleSignInButton} 
                        onPress={_onGoogleLogin}
                        buttonLabelStyle={Styles.googleSignInButtonLabel} />
                </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>

            <View style={Styles.footerContainer}>
                <Text style={Styles.copyrightText}>© Copyright 2025 Atomic Devz. All rights reserved.</Text>
                <Text style={Styles.versionText}>v{PackageJSON.version}</Text>
            </View>
        </ImageBackground>
    )
}

export default Login;