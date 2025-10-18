import React, {useState, useRef} from "react";
import {Alert} from "react-native";
import {useNavigation, CommonActions, NavigationProp} from "@react-navigation/native";
import {useMutation} from "@tanstack/react-query";
import {loginApi} from "@/api/login";
import {LoginNavigationProps} from "./interafaces";
import {UsersProps} from "@/mocks/interafaces";
import {TextInput} from "react-native";

type LoginParams = {
    e: string;
    p: string;
}

export const useLoginHooks = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<LoginNavigationProps>>();

    /** STATES */
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [securePassword, setSecurePassword] = useState<boolean>(true);

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    /** MUTATIONS */
    const loginMutation = useMutation({
        mutationFn: async ({e, p}: LoginParams) => {
            const user: UsersProps = await loginApi(e, p);
            return user;
        },
        onSuccess: (data, variables, context) => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {
                            name: "Dashboard",
                            params: {user: data},
                        },
                    ],
                })
            );
        },
        onError: (error, variables, context) => {
            Alert.alert(
                "Login Failed",
                error.message
            )
        },
        onSettled: (data, error, variables, context) => {
            // DO SOMETHING HERE IF NEEDED
        },
    });

    /** METHODS */
    const _onLogin = async () => {
        loginMutation.mutate({e: email, p: password});
    }

    const _onGoogleLogin = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {
                        name: "OnBoarding",
                        params: {},
                    },
                ],
            })
        );
    }

    const _onChangeInputValue = (val: string, type: "email" | "password") => {
        if(type === "email") {
            setEmail(val);
        }
        if(type === "password") {
            setPassword(val);
        }
    }

    const _onGoToCreateAccount = () => {
        navigation.navigate("CreateAccount");
    }

    const _onNextInput = (nextInput: string) => {
        if(nextInput === "email") {
            emailInputRef.current?.focus();
        }
        if(nextInput === "password") {
            passwordInputRef.current?.focus();
        }
    }

    return {
        _onLogin, _onGoogleLogin, email, password, _onChangeInputValue, _onGoToCreateAccount,
        securePassword, setSecurePassword, emailInputRef, passwordInputRef, _onNextInput
    }
}