import React, {useState} from "react";
import {useNavigation, CommonActions, NavigationProp, useRoute, RouteProp} from '@react-navigation/native';
import {OnBoardingScreenProps, OnBoardingParamListBase} from "./interafaces";
import {updateUser} from "@/api/user";
import {useMutation} from "@tanstack/react-query";
import {OnBoardingOnChangeProps} from "./OnBoardingScreens/Birthdate/interafaces";
import {Alert} from "react-native";
import {useQueryClient} from "@tanstack/react-query";

export const useOnBoarding = () => {
    const navigation = useNavigation<NavigationProp<OnBoardingScreenProps>>();
    const route = useRoute<RouteProp<OnBoardingParamListBase>>();
    const queryClient = useQueryClient();

    const [currentOnBoardingPage, setCurrentOnBoardingPage] = useState<number>(0);
    const [currentAge, setCurrentAge] = useState<number>(0);
    const [savingChanges, setSavingChanges] = useState<boolean>(false);

    const mutateAge = useMutation({
        mutationFn: async (currentAge: number) => {
            return await updateUser({age: currentAge}, route.params?.user?.id);
        },
        onSuccess: (data) => {
            console.log("data", data)
            queryClient.setQueryData([`CURRENT_USER_LOGIN_${route.params?.user?.id}`], data)
            setSavingChanges(false);
        },
        onError: (error) => {
            Alert.alert(
                "Sign Up Error",
                error.message,
            )
        },
        onSettled: () => {
            setCurrentOnBoardingPage((prevState: number) => prevState + 1)
        }
    })

    const _onNextPage = async () => {
        if(currentAge === 0 || currentAge < 10) {
            Alert.alert(
                "Age Not Valid",
                "You need to be at least 10 years old to use this app."
            )
        } else {
            setSavingChanges(true);
            mutateAge.mutate(currentAge)
        }
    }

    const _onPrevPage = () => {
        setCurrentOnBoardingPage((prevState: number) => {
            if(prevState > 1) {
                return prevState - 1;
            }

            return prevState;
        })
    }

    const _onSkip = () => {

    }

    const _onFinishedOnBoarding = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {
                        name: 'Dashboard',
                        params: {user: route.params?.user},
                    },
                ],
            })
        );
    }

    const _onGetAge = ({age}: OnBoardingOnChangeProps) => {
        setCurrentAge(age);
    }

    return {
        currentOnBoardingPage, setCurrentOnBoardingPage, _onNextPage, _onPrevPage,
        _onSkip, _onFinishedOnBoarding, _onGetAge, savingChanges
    }
}