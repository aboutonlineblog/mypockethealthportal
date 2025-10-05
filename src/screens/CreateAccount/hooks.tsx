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
import {useMutation} from "@tanstack/react-query";

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
    const [securePassword, setSecurePassword] = useState<boolean>(true);

    const _onCreateAccount = async () => {
        try {
            setSignupStatus("started");

            if(name === "" || email === "" || password === "") {
                return {success: false, message: "Name, email and password are required.", type: "validation", payload: null}
            }

            if(password.length < 5) {
                return {success: false, message: "Your password should be at least 4 characters long.", type: "validation", payload: null}
            }

            if(password !== confirmPassword) {
                return {success: false, message: "Password and confirm password not matched.", type: "validation", payload: null}
            }

            if(validations().isEmailValid(email) === false) {
                return {success: false, message: "Email address not valid.", type: "validation", payload: null}
            }

            /** API CALL */
            const _onSignup: UsersProps = await signupApi(name, email, password);

            const userInfo: UsersProps = await loginApi(_onSignup?.email, _onSignup?.password);

            return {success: true, message: "", payload: userInfo, type: "result"};
        } catch (error: any) {
            throw new Error(`Something went wrong while creating your account. ${error}`);
        }
    }

    const signupMutation = useMutation({
        mutationFn: _onCreateAccount,
        onSuccess: (data) => {
            if(data?.success === false) {
                setSignupStatus("failed");
                Alert.alert(
                    "Sign Up Error",
                    data.message,
                )
            } else {
                if(data && data.payload && data.payload.id) {
                    queryClient.setQueryData([`CURRENT_LOGIN_USER_${data?.payload?.id}`], data.payload);
                }
            }
        },
        onError: (error) => {
            setSignupStatus("failed");
            
            Alert.alert(
                "Sign Up Error",
                error.message,
            )
        },
        onSettled: (data, error) => {
            if(data?.success === true) {
                /** ROUTE ON SUCCESS */
                setSignupStatus("success");

                setTimeout(() => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: "OnBoarding",
                                    params: {user: data.payload},
                                },
                            ],
                        })
                    );
                }, 300)
            } else {
                setSignupStatus("failed");
            }

            if(error) {
                setSignupStatus("failed");
            }
        },
    })

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
        signupMutation, _onBackToLogin, _onChangeInputValue, signUpStatus,
        nameInputRef, emailInputRef, passwordInputRef, confirmPassInputRef,
        _onNextInput, securePassword, setSecurePassword
    }
}