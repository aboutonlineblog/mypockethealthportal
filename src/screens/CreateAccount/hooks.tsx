import React, {useState} from "react";
import {CreateAccountNavProps} from "./interafaces";
import {useNavigation, CommonActions, NavigationProp} from '@react-navigation/native';

export const useCreateAccount = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<CreateAccountNavProps>>();

    /** STATES */
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const _onCreateAccount = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {
                        name: 'OnBoarding',
                        params: {},
                    },
                ],
            })
        );
    }

    const _onBackToLogin = () => {
        navigation.goBack();
    }

    const _onChangeInputValue = (val: string, type: 'name' | 'email' | 'password') => {
        if(type === 'name') {
            setName(val);
        }

        if(type === 'email') {
            setEmail(val);
        }

        if(type === 'password') {
            setPassword(val);
        }
    }

    return {
        _onCreateAccount, _onBackToLogin, _onChangeInputValue
    }
}