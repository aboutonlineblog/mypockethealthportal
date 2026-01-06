import React, {useState, useRef, useEffect} from "react";
import {Alert, Linking, Platform, AppState} from "react-native";
import _ from "underscore";
import {useQueryClient, useInfiniteQuery} from "@tanstack/react-query";
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {FastingTrackerSubNavi} from "./interafaces";
import {getTotalSeconds} from "@/helpers/DayTimeFormat";
import {getFastingHistory} from "@/api/fasting";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundService from 'react-native-background-actions';
import {requestNotificationPermission} from "@/helpers/Permissions";

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
    const [showGoalEditor, setShowGoalEditor] = useState<boolean>(false);
    const [goalTimeType, setGoalTimeType] = useState<null | 'day' | 'hour' | 'minute'>('minute');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    /** REF */
    let timerInterval = useRef<any>(null);
    let trackingId = useRef<number | null>(null);
    let appState = useRef(AppState.currentState);

    /** VARIABLES */
    const totalSecondsToComplete: number = getTotalSeconds(goalTimeType, goal);
    const timeProgress = totalSecondsElapsed > 0 && totalSecondsToComplete > 0 ? Math.round((totalSecondsElapsed / totalSecondsToComplete) * 100) : 0;
    const tr = 100 - timeProgress;
    const timeRemaining = tr > 0 ? tr : 0;

    let bgTimerShouldStopFlag = false;

    const runTimer = () => {
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
    }

    const setCurrentTimer = () => {
        AsyncStorage.getItem("CURRENT_ACTIVE_FASTING_TIME").then((currentFastingTime: string | null) => {
            if(currentFastingTime) {
                const {start_time, goal_val, goal_time_type} = JSON.parse(currentFastingTime);
                let now = Date.now();  
                let diffMs = now - start_time;
                let secondsPassed = Math.floor(diffMs / 1000);
                let minutesPassed = Math.floor(diffMs / (1000 * 60)) % 60;
                let hoursPassed   = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
                let daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                let currentSeconds = Math.floor(diffMs / 1000) % 60;
                
                let alignInterval = 1;
                let alignIntervalTimer: any = null;

                /** UPDATE IMMEDIATELY */
                setGoal(goal_val);
                setGoalTimeType(goal_time_type);
                setTotalSecondsElapsed(() => secondsPassed);
                setSeconds(() => currentSeconds);
                setMinutes(() => minutesPassed);
                setHours(() => hoursPassed);
                setDays(() => daysPassed);

                /** ALIGN THE VALUE TO THE BACKGROUND TIMER */
                alignIntervalTimer = setInterval(() => {
                    if(alignInterval >= 2 && alignIntervalTimer) clearInterval(alignIntervalTimer) 
                    
                    now = Date.now();  
                    diffMs = now - start_time;
                    secondsPassed = Math.floor(diffMs / 1000);
                    minutesPassed = Math.floor(diffMs / (1000 * 60));
                    hoursPassed   = Math.floor(diffMs / (1000 * 60 * 60));
                    daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                    currentSeconds = Math.floor(diffMs / 1000) % 60;

                    setTotalSecondsElapsed(() => secondsPassed);
                    setSeconds(() => currentSeconds);
                    setMinutes(() => minutesPassed);
                    setHours(() => hoursPassed);
                    setDays(() => daysPassed);

                    alignInterval += 1;
                }, 10000)

                setStartFasting(true);
                runTimer();
            }
        });
    }

    /** REACT HOOKS */
    useEffect(() => {
        /** ON MOUNT, AUTO START IF THERE IS A BACKGROUND TIMER RUNNING */
        setCurrentTimer();

        /** UPDATE THE UI TIMER WHEN APP COMES FROM BACKGROUND TO FOREGROUND */
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                setCurrentTimer();
            } else {
                /** STOP THE TIMER WHEN USER MINIMIZE THE APP */
                if(timerInterval.current) clearInterval(timerInterval.current);
            }

            appState.current = nextAppState;
        });

        return () => {
            if(timerInterval.current) clearInterval(timerInterval.current);
            subscription.remove();
        }
    }, [])

    useEffect(() => {
        if(timeRemaining < 1) {
            clearInterval(timerInterval.current);
            const eDate = new Date();

            setEndDate((prevState) => {
                if(!prevState) return eDate;

                return prevState;
            });

            setStartFasting((prevState) => {
                if(prevState === true) return false;

                return prevState;
            });

            Alert.alert(
                'Awesome!',
                'You have completed your fasting goal! Keep it up.',
                [
                    {text: "Got it", onPress: async () => {
                        bgTimerShouldStopFlag = true;
                        await AsyncStorage.removeItem('CURRENT_ACTIVE_FASTING_TIME');
                        await BackgroundService.stop();
                        await updateFastingData(eDate);
                    }, style: 'cancel'},
                ]
            );

            return;
        }

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
                            bgTimerShouldStopFlag = true;
                            await AsyncStorage.removeItem('CURRENT_ACTIVE_FASTING_TIME');
                            await BackgroundService.stop();
                            await updateFastingData(eDate);
                        }, style: 'cancel'},
                    ]
                );

                return;
            }
        }
    }, [startDate, totalSecondsElapsed, totalSecondsToComplete])

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

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const fastingService = async (taskDataArguments: any) => {
        const {startTime} = taskDataArguments;

        /** WHILE LOOP HAS TO FAIL IN ORDER TO RESET THE TIMER
         *  THUS THE REF FLAG IS NEEDED
         */
        while (BackgroundService.isRunning() && !bgTimerShouldStopFlag) {            
            let elapsed = Date.now() - startTime;
            let hours = Math.floor(elapsed / 3600000);
            let minutes = Math.floor((elapsed % 3600000) / 60000);

            await BackgroundService.updateNotification({
                taskDesc: `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`,
            });

            /** REDUDE SLEEP SO THE BACKGROUND TASK CAN RESET FAST */
            await sleep(1000);
        }
    };

    const _onStartFasting = async () => {
        const allowed = await requestNotificationPermission();

        if(allowed !== undefined && allowed === false) {
            Alert.alert(
                'Enable notifications to continue',
                'Fasting tracking uses notifications to display elapsed time while the app is closed. Please enable notifications to proceed.\n\nSettings → App info → Notifications → Allow',
                [
                    {text: 'Cancel', onPress: () => {}},
                    {text: 'Enable', onPress: async () => {
                        if (Platform.OS !== 'android') return;

                        try {
                            await Linking.openURL('package:' + 'com.mypockethealthportal');
                        } catch (e1) {
                            console.log("error1", e1)
                            try {
                                await Linking.openURL('android.settings.APP_NOTIFICATION_SETTINGS');
                            } catch (e2) {
                                console.log("error2", e2)
                                try {
                                    await Linking.openSettings();
                                } catch (e3) {
                                    console.log("error3", e3)
                                }
                            }
                        }
                    }}
                ]
            )
            return;
        }

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

        const start_time = Date.now();

        if(startFasting === false) {
            bgTimerShouldStopFlag = false;
            await BackgroundService.stop();
            await restart();
            setStartFasting(true);

            await AsyncStorage.setItem("CURRENT_ACTIVE_FASTING_TIME", JSON.stringify({
                start_time, goal_val: goal, goal_time_type: goalTimeType
            }));

            await BackgroundService.start(
                fastingService,
                {
                    taskName: 'Fasting Tracker',
                    taskTitle: 'Fasting in progress',
                    taskDesc: 'Starting...',
                    taskIcon: {
                        name: 'ic_launcher',
                        type: 'mipmap',
                    },
                    color: '#4CAF50',
                    parameters: {
                        startTime: start_time,
                    },
                }
            );

            runTimer();

            const sDate = new Date();
            setStartDate(sDate);
            await createFastingData(sDate);
        } else {
            bgTimerShouldStopFlag = true;
            await BackgroundService.stop();
            await AsyncStorage.removeItem('CURRENT_ACTIVE_FASTING_TIME');
            setStartFasting(false);
            clearInterval(timerInterval.current);

            const eDate = new Date();
            setEndDate(eDate);
            await updateFastingData(eDate);
        }
    }

    const _onEditGoal = () => {
        setShowGoalEditor(true);
    }

    const _onCloseEditGoal = () => {
        setShowGoalEditor(false);
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
        timeRemaining,
        _onEditGoal,
        _onCloseEditGoal,
        showGoalEditor,
        setGoalTimeType,
        setGoal
    }
}