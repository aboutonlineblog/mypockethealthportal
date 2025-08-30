import React, {useState, useRef, useEffect, useMemo} from "react";
import {Alert} from "react-native";
import _ from "underscore";
import {useQueryClient, useInfiniteQuery} from "@tanstack/react-query";
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {FastingTrackerSubNavi} from "./interafaces";
import {getTotalSeconds} from "@/helpers/DayTimeFormat";
import {getFastingHistory} from "@/api/fasting";

export const useFastingTrackerHooks = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<FastingTrackerSubNavi>>();
    const queryClient = useQueryClient();

    /** PRE-LOADS */
    /** PRE-LOAD FASTING HISTORY FOR STOP AND START FASTING MUTATION */
    useInfiniteQuery({
        queryKey: ['FASTING_HISTORY', {queryClient}], 
        queryFn: getFastingHistory, 
        initialPageParam: 1, 
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            return lastPageParam + 1;
        }
    });

    /** STATES */
    const [startFasting, setStartFasting] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);
    const [totalSecondsElapsed, setTotalSecondsElapsed] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [days, setDays] = useState<number>(0);
    const [goal, setGoal] = useState<number>(2);
    const [goalTimeType, setGoalTimeType] = useState<string | null>('minute');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    /** REF */
    let timerInterval = useRef<any>(null);
    let trackingId = useRef<number | null>(null);

    /** VARIABLES */
    const totalSecondsToComplete: number = getTotalSeconds(goalTimeType, goal);
    const timeProgress = totalSecondsElapsed > 0 && totalSecondsToComplete > 0 ? Math.round((totalSecondsElapsed / totalSecondsToComplete) * 100) : 0;
    const timeRemaining = 100 - timeProgress;

    /** REACT HOOKS */
    useEffect(() => {
        if(startDate !== null && totalSecondsElapsed > 0) {
            if(totalSecondsElapsed === totalSecondsToComplete) {
                clearInterval(timerInterval.current);
                const eDate = new Date();
                setEndDate(eDate);
                setStartFasting(false);

                Alert.alert(
                    'Awesome!',
                    'You have completed your fasting goal! Keep it up.',
                    [
                        {text: "Got it", onPress: async () => {
                            await updateFastingData(eDate);
                        }, style: 'cancel'},
                    ]
                );
            }
            
        }
    }, [startDate, totalSecondsElapsed])

    /** FUNCTIONS */
    const restart = () => {
        return new Promise((resolve: Function) => {
            setStartFasting(false);
            setSeconds(0);
            setTotalSecondsElapsed(0);
            setMinutes(0);
            setHours(0);
            setDays(0);
            setStartDate(null);
            setEndDate(null);

            setTimeout(() => {
                resolve(true);
            }, 200)
        })
    }

    const _onNavigateToHistory = () => {
        navigation.navigate("FastingTrackerHistory");
    }

    const createFastingData = async (sDate: Date) => {
        const newSDate = new Date(sDate);
        const startedTrackingId = Math.floor(Math.random() * 99999);
        trackingId.current = startedTrackingId;
        const optimisticData = {
            id: startedTrackingId,
            start_time: sDate,
            end_time: null,
            fasting_range: 0,
            status: 'started',
            created_at: sDate,
            updated_at: null,
            goal: {
                time_value: goal,
                time_type: goalTimeType,
                time_int: newSDate.setMinutes(new Date().getMinutes() + goal)
            }
        }

        queryClient.setQueryData([`FASTING_HISTORY_ITEM_${startedTrackingId}`, {id: startedTrackingId}], optimisticData)
        queryClient.setQueryData(['FASTING_HISTORY', {queryClient}], (oldData: any) => {
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
        queryClient.setQueryData([`FASTING_HISTORY_ITEM_${trackingId.current}`, {id: trackingId.current}], (oldData: any) => {
            return {
                ...oldData,
                end_time: eDate,
                updated_at: eDate,
                status: 'ended',
                fasting_range: totalSecondsElapsed,
            };
        });
    }

    const _onSetGoal = () => {

    }

    const _onStartFasting = async () => {
        if(goal === 0) {
            Alert.alert(
                'Wait!',
                'You should set a goal first before you start your fasting.',
                [
                    {text: "Cancel", onPress: () => {}, style: 'cancel'},
                    {text: 'Okay', onPress: _onSetGoal}
                ]
            );

            return;
        }

        if(startFasting === false) {
            await restart();
            setStartFasting(true);

            timerInterval.current = setInterval(() => {
                setTotalSecondsElapsed((prevSec) => {
                    const currSec = prevSec += 1;
                    return currSec;
                });

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
            await createFastingData(sDate);
        } else {
            setStartFasting(false);
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
        goal,
        goalTimeType,
        totalSecondsElapsed,
        timeProgress,
        timeRemaining
    }
}