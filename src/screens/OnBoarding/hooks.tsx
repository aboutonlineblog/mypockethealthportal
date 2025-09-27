import React, {useState} from "react";
import {useNavigation, CommonActions, NavigationProp} from '@react-navigation/native';
import {OnBoardingScreenProps} from "./interafaces";
import {updateUser} from "@/api/user";
import {useMutation} from "@tanstack/react-query";

export const useOnBoarding = () => {
    const navigation = useNavigation<NavigationProp<OnBoardingScreenProps>>();
    const [currentOnBoardingPage, setCurrentOnBoardingPage] = useState<number>(0);

    const mutateAge = useMutation({
        mutationFn: async () => {

        },
        onSuccess: () => {

        },
        onError: () => {

        },
        onSettled: () => {
            
        }
    })

    const _onNextPage = async () => {
        await updateUser();
        setCurrentOnBoardingPage((prevState: number) => prevState + 1)
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
                        params: {user: {}},
                    },
                ],
            })
        );
    }

    return {
        currentOnBoardingPage, setCurrentOnBoardingPage, _onNextPage, _onPrevPage,
        _onSkip, _onFinishedOnBoarding
    }
}