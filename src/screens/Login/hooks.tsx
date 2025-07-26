import React, {useState} from "react";
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {loginApi} from "../../api/login";
import {LoginProps} from "./interafaces";

export const useLoginHooks = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const _onLogin = async () => {
        const loginMutation: UseMutationResult = useMutation({
            mutationFn: async (newTodo) => {
                const user: LoginProps = await loginApi(email, password);
                return user;
            },
        });

        console.log("loginMutation", loginMutation)
        // navigation.dispatch(
        //     CommonActions.reset({
        //         index: 1,
        //         routes: [
        //             {
        //                 name: 'Dashboard',
        //                 params: {},
        //             },
        //         ],
        //     })
        // );
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