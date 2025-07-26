import React, {useState} from "react";
import {Alert} from "react-native";
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {loginApi} from "../../api/login";
import {LoginProps} from "./interafaces";

type LoginParams = {
    e: string;
    p: string;
}

export const useLoginHooks = () => {
    /** HOOKS */
    const navigation = useNavigation();

    /** STATES */
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    /** MUTATIONS */
    const loginMutation = useMutation({
        mutationFn: async ({e, p}: LoginParams) => {
            const user: LoginProps = await loginApi(e, p);
            return user;
        },
        onSuccess: (data, variables, context) => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {
                            name: 'Dashboard',
                            params: {user: data},
                        },
                    ],
                })
            );
        },
        onError: (error, variables, context) => {
            Alert.alert(
                'Login Failed',
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
                        name: 'Dashboard',
                        params: {},
                    },
                ],
            })
        );
    }

    const _onChangeInputValue = (val: string, type: 'email' | 'password') => {
        if(type === 'email') {
            setEmail(val);
        }
        if(type === 'password') {
            setPassword(val);
        }
    }

    return {_onLogin, _onGoogleLogin, email, password, _onChangeInputValue}
}