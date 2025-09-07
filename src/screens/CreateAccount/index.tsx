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
import LoginBG from "@/screens/Login/assets/bg.jpg";
import AppLogo from "@/screens/Login/assets/app_logo.png";
import {useCreateAccount} from "./hooks";

const CreateAccount = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {_onCreateAccount, _onBackToLogin, _onChangeInputValue} = useCreateAccount();

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
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect={false}
                                style={[GlobalStyles.input, Styles.input]} 
                                placeholder="Enter name" 
                                placeholderTextColor="#b5b5b5"
                                onChangeText={(val: string) => _onChangeInputValue(val, 'name')} 
                            />
                        </View>
                        <View style={GlobalStyles.inputWrapper}>
                            <Text style={Styles.formLabel}>Email</Text>
                            <TextInput 
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoComplete="off"
                                autoCorrect={false}
                                style={[GlobalStyles.input, Styles.input]} 
                                placeholder="Enter email address" 
                                placeholderTextColor="#b5b5b5"
                                onChangeText={(val: string) => _onChangeInputValue(val, 'email')} 
                            />
                        </View>
                        <View style={GlobalStyles.inputWrapper}>
                            <Text style={Styles.formLabel}>Password</Text>
                            <TextInput 
                                style={[GlobalStyles.input, Styles.input]} 
                                placeholder="Enter password" 
                                placeholderTextColor="#b5b5b5"
                                secureTextEntry={true}
                                onChangeText={(val: string) => _onChangeInputValue(val, 'password')} 
                            />
                        </View>
                        <Button label="Create Account" onPress={_onCreateAccount} />

                        <Text style={Styles.backToLoginLink} onPress={_onBackToLogin}>Back to Login</Text>
                        
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

export default CreateAccount;