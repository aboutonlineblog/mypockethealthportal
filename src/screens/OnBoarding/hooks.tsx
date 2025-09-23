import React, {useState} from "react";
import {useNavigation, CommonActions, NavigationProp} from '@react-navigation/native';
import {OnBoardingScreenProps} from "./interafaces";

export const useOnBoarding = () => {
    const navigation = useNavigation<NavigationProp<OnBoardingScreenProps>>();
    const [currentOnBoardingPage, setCurrentOnBoardingPage] = useState<number>(1);

    const _onNextPage = () => {
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