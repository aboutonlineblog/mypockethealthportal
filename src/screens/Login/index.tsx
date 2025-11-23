import React from "react";
import {
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    TouchableOpacity, TextInput,
    ImageBackground, Image
} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {APP_TITLE, USE_APP_LOGO} from "@/config/app";
import Button from "@/modules/Button";
import {useLoginHooks} from "./hooks";
import AppBG from "@/assets/bg.jpg";
import GoogleIcon from "./assets/google_logo.png";
import PackageJSON from "../../../package.json";
import AppLogo from "./assets/app_logo.png";
import Icon from "react-native-vector-icons/Feather";
import {Colors} from "@/config/theme";

const Login = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {
        _onGoogleLogin, _onLogin, _onChangeInputValue, _onGoToCreateAccount, securePassword,
        emailInputRef, passwordInputRef, _onNextInput, setSecurePassword, email, password
    } = useLoginHooks();

    return (
        <ImageBackground source={AppBG} style={Styles.container}>
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
                            <Text style={Styles.formLabel}>Email</Text>
                            <TextInput 
                                ref={emailInputRef}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoComplete="off"
                                autoCorrect={false}
                                style={[GlobalStyles.input, Styles.input]} 
                                placeholder="Enter email address" 
                                placeholderTextColor="#b5b5b5"
                                value={email}
                                onChangeText={(val: string) => _onChangeInputValue(val, 'email')}
                                returnKeyType="next"
                                onSubmitEditing={() => _onNextInput("password")} />
                        </View>
                        <View style={GlobalStyles.inputWrapper}>
                            <Text style={Styles.formLabel}>Password</Text>
                            <View style={[Styles.inputWrapper, Styles.input]}>
                                <TextInput 
                                    ref={passwordInputRef}
                                    style={[GlobalStyles.inputWithIcon]} 
                                    placeholder="Enter password" 
                                    placeholderTextColor="#b5b5b5"
                                    secureTextEntry={securePassword}
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={(val: string) => _onChangeInputValue(val, 'password')}
                                    returnKeyType="go"
                                    onSubmitEditing={_onLogin} 
                                />
                                <TouchableOpacity style={Styles.showPassBtn} onPress={() => setSecurePassword(!securePassword)}>
                                    <Icon name={securePassword === true ? "eye" : "eye-off"} size={Styles.showPassBtn.width * 0.7} color={Colors.black} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button label="Login" onPress={_onLogin} />
                        <Button label="Create Account" onPress={_onGoToCreateAccount} />
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