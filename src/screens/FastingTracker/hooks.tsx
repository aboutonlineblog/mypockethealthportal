import React, {useState, useRef} from "react";
import _ from "underscore";

export const useFastingTrackerHooks = () => {
    const [startFasting, setStartFasting] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [days, setDays] = useState<number>(0);

    let timerInterval = useRef<any>(null);

    const _onStartFasting = () => {
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
            }, 1000)
        } else {
            clearInterval(timerInterval.current);
        }
    }

    return {
        startFasting,
        _onStartFasting,
        seconds,
        minutes,
        hours,
        days
    }
}