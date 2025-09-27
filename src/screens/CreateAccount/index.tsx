import React from "react";
import {
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Platform, TextInput,
    ImageBackground, Image,
    TouchableOpacity
} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {APP_TITLE, USE_APP_LOGO} from "@/config/app";
import Button from "@/modules/Button";
import LoginBG from "@/screens/Login/assets/bg.jpg";
import AppLogo from "@/screens/Login/assets/app_logo.png";
import {useCreateAccount} from "./hooks";
import Icon from "react-native-vector-icons/Feather";
import {Colors} from "@/config/theme";

const CreateAccount = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {
        signupMutation, _onBackToLogin, _onChangeInputValue, signUpStatus,
        nameInputRef, emailInputRef, passwordInputRef, confirmPassInputRef,
        _onNextInput, securePassword, setSecurePassword
    } = useCreateAccount();

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
                            <Text style={Styles.formLabel}>Your name</Text>
                            <TextInput 
                                ref={nameInputRef}
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect={false}
                                style={[GlobalStyles.input, Styles.input]} 
                                placeholder="Enter name" 
                                placeholderTextColor="#b5b5b5"
                                onChangeText={(val: string) => _onChangeInputValue(val, "name")} 
                                returnKeyType="next"
                                onSubmitEditing={() => _onNextInput("email")}
                            />
                        </View>
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
                                onChangeText={(val: string) => _onChangeInputValue(val, "email")} 
                                returnKeyType="next"
                                onSubmitEditing={() => _onNextInput("password")}
                            />
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
                                    onChangeText={(val: string) => _onChangeInputValue(val, "password")} 
                                    returnKeyType="next"
                                    onSubmitEditing={() => _onNextInput("confirm_password")}
                                />
                                <TouchableOpacity style={Styles.showPassBtn} onPress={() => setSecurePassword(!securePassword)}>
                                    <Icon name={securePassword === true ? "eye" : "eye-off"} size={Styles.showPassBtn.width * 0.7} color={Colors.black} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={GlobalStyles.inputWrapper}>
                            <Text style={Styles.formLabel}>Confirm Password</Text>
                            <View style={[Styles.inputWrapper, Styles.input]}>
                                <TextInput 
                                    ref={confirmPassInputRef}
                                    style={[GlobalStyles.inputWithIcon]} 
                                    placeholder="Confirm password" 
                                    placeholderTextColor="#b5b5b5"
                                    secureTextEntry={securePassword}
                                    autoCapitalize="none"
                                    onChangeText={(val: string) => _onChangeInputValue(val, "confirm_password")} 
                                    onSubmitEditing={() => signupMutation.mutate()}
                                />
                                <TouchableOpacity style={Styles.showPassBtn} onPress={() => setSecurePassword(!securePassword)}>
                                    <Icon name={securePassword === true ? "eye" : "eye-off"} size={Styles.showPassBtn.width * 0.7} color={Colors.black} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Button label="Create Account" onPress={() => signupMutation.mutate()} loading={signUpStatus === "started"} />

                        <Text style={Styles.backToLoginLink} onPress={_onBackToLogin}>Back to Login</Text>
                        
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

export default CreateAccount;