import React from "react";
import {
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Platform, TextInput
} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {APP_TITLE} from "@/config/app";
import Button from "@/modules/Button";
import {useLoginHooks} from "./hooks";

const Login = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {_onGoogleLogin, _onLogin, _onChangeInputValue} = useLoginHooks();

    return (
        <View style={Styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={Styles.keyboardAvoidingView} behavior="padding">
                    <View style={Styles.appTitleWrapper}>
                        <Text style={Styles.appTitle}>{APP_TITLE}</Text>
                    </View>

                    <View style={GlobalStyles.inputWrapper}>
                        <Text>Email</Text>
                        <TextInput 
                            autoCapitalize="none"
                            keyboardType="email-address"
                            autoComplete="off"
                            autoCorrect={false}
                            style={GlobalStyles.input} 
                            placeholder="Enter email address" 
                            placeholderTextColor="#b5b5b5"
                            onChangeText={(val: string) => _onChangeInputValue(val, 'email')} />
                    </View>
                    <View style={GlobalStyles.inputWrapper}>
                        <Text>Password</Text>
                        <TextInput 
                            style={GlobalStyles.input} 
                            placeholder="Enter password" 
                            placeholderTextColor="#b5b5b5"
                            secureTextEntry={true}
                            onChangeText={(val: string) => _onChangeInputValue(val, 'password')} />
                    </View>
                    <Button label="Login" onPress={_onLogin} />
                    <Text>or</Text>
                    <Button label="Login with Google" onPress={_onGoogleLogin} />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Login;