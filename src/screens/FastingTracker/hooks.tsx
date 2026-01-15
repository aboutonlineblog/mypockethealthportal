import React, {useState, useRef, useEffect} from "react";
import {Alert, Linking, Platform, AppState} from "react-native";
import _ from "underscore";
import {useQueryClient, useInfiniteQuery} from "@tanstack/react-query";
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {FastingTrackerSubNavi} from "./interafaces";
import {getTotalSeconds} from "@/helpers/DayTimeFormat";
import {getFastingHistory} from "@/api/fasting";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestNotificationPermission} from "@/helpers/Permissions";
import notifee, { AndroidImportance } from '@notifee/react-native';

export async function setupFastingChannel() {
    await notifee.createChannel({
        id: 'fasting_tracker',
        name: 'Fasting Tracker',
        importance: AndroidImportance.DEFAULT,
    });
}

export const sleep = (ms: number) =>
  new Promise(res => setTimeout(res, ms));

let stopService = false;
export async function startFastingForegroundService(startTime: number, endTime: number) {
    stopService = false;

    let diffMs = Date.now() - startTime;

    let hours = Math.floor(diffMs / 3600000);
    let minutes = Math.floor((diffMs % 3600000) / 60000);
    
    await notifee.displayNotification({
        id: 'fasting_tracker',
        title: 'Fasting in progress',
        body: `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`,
        android: {
            channelId: 'fasting_tracker',
            asForegroundService: true,
            ongoing: true,
            smallIcon: 'ic_launcher',
            color: '#fccc3dff',
        },
        data: { startTime, endTime },
    });
}

export const stopFastingForegroundService = async () => {
    stopService = true;
    await notifee.stopForegroundService();
    await notifee.cancelNotification('fasting_tracker');
};

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

    const stopFastingService = async () => {
        await stopFastingForegroundService();
        await AsyncStorage.removeItem('CURRENT_ACTIVE_FASTING_TIME');
        if(timerInterval.current) clearInterval(timerInterval.current);

        const eDate = new Date();

        setEndDate((prevState) => {
            if(!prevState) return eDate;

            return prevState;
        });

        setStartFasting((prevState) => {
            if(prevState === true) return false;

            return prevState;
        });
    };

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

                let hours = Math.floor(diffMs / 3600000);
                let minutes = Math.floor((diffMs % 3600000) / 60000);
                
                let alignInterval = 1;
                let alignIntervalTimer: any = null;

                const secToComplete: number = getTotalSeconds(goal_time_type, goal_val);

                const secToCompleteMin = Math.floor(secToComplete / 60);
                const secToCompleteSec = secToComplete % 60;
                const secToCompleteHours = Math.floor((secToComplete % 86400) / 3600);
                const secToCompleteDays =Math.floor(secToComplete / 86400);

                if(secondsPassed >= secToComplete) {
                    stopFastingService();
                    /** UPDATE IMMEDIATELY */
                    setGoal(goal_val);
                    setGoalTimeType(goal_time_type);
                    setTotalSecondsElapsed(secToComplete);
                    setSeconds(secToCompleteSec);
                    setMinutes(secToCompleteMin);
                    setHours(secToCompleteHours);
                    setDays(secToCompleteDays);
                } else {
                    /** UPDATE IMMEDIATELY */
                    setGoal(goal_val);
                    setGoalTimeType(goal_time_type);
                    setTotalSecondsElapsed(secondsPassed);
                    setSeconds(currentSeconds);
                    setMinutes(minutes);
                    setHours(hours);
                    setDays(daysPassed);

                    setStartFasting(true);
                    runTimer();
                }

                /** ALIGN THE VALUE TO THE BACKGROUND TIMER */
                // alignIntervalTimer = setInterval(() => {
                //     if(alignInterval >= 2 && alignIntervalTimer) clearInterval(alignIntervalTimer) 
                    
                //     now = Date.now();  
                //     diffMs = now - start_time;
                //     secondsPassed = Math.floor(diffMs / 1000);
                //     minutesPassed = Math.floor(diffMs / (1000 * 60));
                //     hoursPassed   = Math.floor(diffMs / (1000 * 60 * 60));
                //     daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                //     currentSeconds = Math.floor(diffMs / 1000) % 60;

                //     hours = Math.floor(diffMs / 3600000);
                //     minutes = Math.floor((diffMs % 3600000) / 60000);

                //     setGoal(goal_val);
                //     setGoalTimeType(goal_time_type);
                //     setTotalSecondsElapsed(secondsPassed);
                //     setSeconds(currentSeconds);
                //     setMinutes(minutes);
                //     setHours(hours);
                //     setDays(daysPassed);

                //     alignInterval += 1;
                // }, 10000)
            }
        });
    }

    /** REACT HOOKS */
    useEffect(() => {
        /** CREATE NOTIFICATION CHANNEL */
        setupFastingChannel();

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

    /** INITIALIZE FOREGROUND SERVICE */
    useEffect(() => {
        notifee.registerForegroundService(async (notification) => {
            const { startTime, endTime } = notification.data as any;

            stopService = false;

            while (!stopService) {
                const diffMs = Date.now() - startTime;

                const hours = Math.floor(diffMs / 3600000);
                const minutes = Math.floor((diffMs % 3600000) / 60000);
                let now = Date.now();  

                let secondsPassed = Math.floor(diffMs / 1000);

                if(secondsPassed === endTime) {
                    stopService = true;
                    // await notifee.displayNotification({
                    //     id: 'fasting_tracker',
                    //     title: 'Fasting Completed',
                    //     body: `You have successfully completed a ${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''} fasting!`,
                    //     android: {
                    //         channelId: 'fasting_tracker',
                    //         asForegroundService: true,
                    //         ongoing: true,
                    //         smallIcon: 'ic_launcher',
                    //         color: '#fccc3dff',
                    //     },
                    //     data: { startTime, endTime },
                    // });
                } else {
                    // await notifee.displayNotification({
                    //     id: 'fasting_tracker',
                    //     title: 'Fasting in progress',
                    //     body: `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`,
                    //     android: {
                    //         channelId: 'fasting_tracker',
                    //         asForegroundService: true,
                    //         ongoing: true,
                    //         smallIcon: 'ic_launcher',
                    //         color: '#fccc3dff',
                    //     },
                    //     data: { startTime, endTime },
                    // });
                }

                await sleep(60000);
            }
        });

        notifee.onBackgroundEvent(async (notification) => {

        })
    }, [])

    useEffect(() => {
        if(timeRemaining < 1 || stopService === true) {
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
                        stopFastingService();
                        await updateFastingData(eDate);
                    }, style: 'cancel'},
                ]
            );

            return;
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

    const _onStartFasting = async () => {
        stopService = false;
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
            try {
                await restart();
                setStartFasting(true);

                await AsyncStorage.setItem("CURRENT_ACTIVE_FASTING_TIME", JSON.stringify({
                    start_time, goal_val: goal, goal_time_type: goalTimeType
                }));

                /** BACKGROUND SERVICE HERE */
                startFastingForegroundService(start_time, totalSecondsToComplete);

                runTimer();

                const sDate = new Date();
                setStartDate(sDate);
                await createFastingData(sDate);
            } catch (error) {
                console.log('eeeerrr', error)
            }
        } else {
            stopFastingService();
            setStartFasting(false);
            clearInterval(timerInterval.current);

            const eDate = new Date();
            setEndDate(eDate);
            await updateFastingData(eDate);
        }
    }

    const _onEditGoal = () => {
        stopService = false;
        setShowGoalEditor(true);
    }

    const _onCloseEditGoal = () => {
        stopService = false;
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