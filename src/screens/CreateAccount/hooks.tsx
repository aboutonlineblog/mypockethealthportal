import React, {useState, useRef, Ref} from "react";
import {CreateAccountNavProps} from "./interafaces";
import {useNavigation, CommonActions, NavigationProp} from "@react-navigation/native";
import {signupApi} from "@/api/signup";
import {loginApi} from "@/api/login";
import {Alert} from "react-native";
import {UsersProps} from "@/mocks/interafaces";
import {useQueryClient} from "@tanstack/react-query";
import {validations} from "@/helpers/Validations";
import {TextInput} from "react-native";

export const useCreateAccount = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<CreateAccountNavProps>>();
    const queryClient = useQueryClient();
    const nameInputRef = useRef<TextInput>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const confirmPassInputRef = useRef<TextInput>(null);

    /** STATES */
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [signUpStatus, setSignupStatus] = useState<string | null>(null);

    const _onCreateAccount = async () => {
        try {
            setSignupStatus("started");

            /** VALIDATIONS */
            if(name === "" || email === "" || password === "") {
                setSignupStatus("failed");
                Alert.alert(
                    "Sign Up Error",
                    "Name, email and password are required.",
                )
                return;
            }

            if(password.length < 5) {
                setSignupStatus("failed");
                Alert.alert(
                    "Sign Up Error",
                    "Your password should be at least 4 characters long.",
                )
                return;
            }

            if(password !== confirmPassword) {
                setSignupStatus("failed");
                Alert.alert(
                    "Sign Up Error",
                    "Password and confirm password not matched.",
                )
                return;
            }

            if(validations().isEmailValid(email) === false) {
                setSignupStatus("failed");
                Alert.alert(
                    "Sign Up Error",
                    "Email address not valid.",
                )
                return;
            }

            /** API CALL */
            const _onSignup: UsersProps = await signupApi(name, email, password);

            const userInfo: UsersProps = await loginApi(_onSignup?.email, _onSignup?.password);

            queryClient.setQueryData([`CURRENT_LOGIN_USER_${userInfo.id}`], userInfo)

            /** ROUTE ON SUCCESS */
            setSignupStatus("success");

            setTimeout(() => {
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
            }, 300)
        } catch (error: any) {
            setSignupStatus("failed");
            Alert.alert(
                "Login Error",
                error,
            )
        }
    }

    const _onBackToLogin = () => {
        navigation.goBack();
    }

    const _onChangeInputValue = (val: string, type: "name" | "email" | "password" | "confirm_password") => {
        if(type === "name") {
            setName(val);
        }

        if(type === "email") {
            setEmail(val);
        }

        if(type === "password") {
            setPassword(val);
        }
        if(type === "confirm_password") {
            setConfirmPassword(val);
        }
    }

    const _onNextInput = (nextInput: string) => {
        if(nextInput === "name") {
            nameInputRef.current?.focus();
        }
        if(nextInput === "email") {
            emailInputRef.current?.focus();
        }
        if(nextInput === "password") {
            passwordInputRef.current?.focus();
        }
        if(nextInput === "confirm_password") {
            confirmPassInputRef.current?.focus();
        }
    }

    return {
        _onCreateAccount, _onBackToLogin, _onChangeInputValue, signUpStatus,
        nameInputRef, emailInputRef, passwordInputRef, confirmPassInputRef,
        _onNextInput
    }
}