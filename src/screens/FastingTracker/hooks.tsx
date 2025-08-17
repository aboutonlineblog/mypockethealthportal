import React, {useState, useRef} from "react";
import {Alert} from "react-native";
import _ from "underscore";
import {useQueryClient} from "@tanstack/react-query";
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {FastingTrackerSubNavi} from "./interafaces";

export const useFastingTrackerHooks = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<FastingTrackerSubNavi>>();
    const queryClient = useQueryClient();

    /** STATES */
    const [startFasting, setStartFasting] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [days, setDays] = useState<number>(0);
    const [goal, setGoal] = useState<number>(0);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    /** REF */
    let timerInterval = useRef<any>(null);

    const _onNavigateToHistory = () => {
        navigation.navigate("FastingTrackerHistory");
    }

    const createFastingData = async (sDate: Date) => {
        const optimisticData = {
            id: Math.floor(Math.random() * 99999),
            start_time: sDate,
            end_time: null,
            fasting_range: 0,
            fasting_range_time_unit: 'sec',
            status: 'started',
            created_at: sDate,
            updated_at: null,
            goal: {
                time_value: goal,
                time_type: 'hour',
                time_int: sDate.setHours(new Date().getHours() + goal)
            }
        }

        queryClient.setQueryData(['FASTING_HISTORY'], (oldData: any) => {
            if (!oldData) {
                return {
                    pages: [[optimisticData]],
                    pageParams: [1],
                };
            }

            const updatedPages = [
                [optimisticData, ...oldData.pages[0]],
                ...oldData.pages.slice(1),
            ];

            return {
                ...oldData,
                pages: updatedPages,
            };
        });
    }

    const updateFastingData = async (eDate: Date) => {

    }

    const _onSetGoal = () => {

    }

    const _onStartFasting = async () => {
        setStartFasting(!startFasting);

        if(startFasting === false) {
            timerInterval.current = setInterval(() => {
                setSeconds((prevSec: number) => {
                    const currSec = prevSec += 1;

                    if (currSec < 60) {
                        return currSec;
                    }

                    setMinutes((prevMin: number) => {
                        const currMin = prevMin += 1;

                        if (currMin < 60) {
                            return currMin;
                        }

                         setHours((prevHr: number) => {
                            const currHr = prevHr += 1;

                            if (currHr < 24) {
                                return currHr;
                            }

                            setDays((prevDays: number) => {
                                const currDay = prevDays += 1;

                                return currDay;
                            })

                            return 0;
                        })

                        return 0;
                    })

                    return 0
                });
            }, 1000);

            const sDate = new Date();
            setStartDate(sDate);

            if(goal === null) {
                Alert.alert(
                    'Wait!',
                    'You should set a goal first before you start your fasting.',
                    [
                        {text: "Cancel", onPress: () => {}, style: 'cancel'},
                        {text: 'Okay', onPress: _onSetGoal}
                    ]
                )
            } else {
                await createFastingData(sDate);
            }
        } else {
            clearInterval(timerInterval.current);

            const eDate = new Date();
            setEndDate(eDate);
            await updateFastingData(eDate);
        }
    }

    return {
        startFasting,
        _onStartFasting,
        seconds,
        minutes,
        hours,
        days,
        _onNavigateToHistory,
        startDate,
        endDate,
    }
}