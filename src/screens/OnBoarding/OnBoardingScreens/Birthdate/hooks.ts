import React, {useState, useMemo} from "react";
import {DaysArray, MonthsArr, YearArr, getAge} from "@/helpers/DayTimeFormat";
import {PickerProps, DatePickerProps} from "./interafaces";
import _ from "underscore";
import {Alert} from "react-native";

export const useBirthdatePicker = () => {
    const [selectedPicker, setSelectedPicker] = useState<null | "day" | "month" | "year">(null);
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<null | PickerProps>(null);
    const [selectedMonth, setSelectedMonth] = useState<null | PickerProps>(null);
    const [selectedYear, setSelectedYear] = useState<null | PickerProps>(null);
    const [currentDate, setCurrentDate] = useState<string>(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)
    const [showCalendarChangeMonth, setShowCalendarChangeMonth] = useState<boolean>(false);
    const [showCalendarChangeYear, setShowCalendarChangeYear] = useState<boolean>(false);

    const yearList = useMemo(() => {
        return YearArr(1940, 2015);
    }, [])

    const pickerData = selectedPicker === "day" ? DaysArray 
    : selectedPicker === "month" ? MonthsArr
    : selectedPicker === "year" ? yearList : [];

    const _onPickDay = () => {
        setShowPicker(!showPicker);
        if(selectedPicker === null) {
            setSelectedPicker("day");
        } else {
            setSelectedPicker(null)
        }
    }

    const _onPickMonth = () => {
        setShowPicker(!showPicker);
        if(selectedPicker === null) {
            setSelectedPicker("month");
        } else {
            setSelectedPicker(null)
        }
    }

    const _onPickYear = () => {
        setShowPicker(!showPicker);
        if(selectedPicker === null) {
            setSelectedPicker("year");
        } else {
            setSelectedPicker(null)
        }
    }

    const _onSelectPickerItem = (payload: PickerProps) => {
        if(selectedPicker === "day") {
            setSelectedDay(payload);
        }
        if(selectedPicker === "month") {
            setSelectedMonth(payload);
        }
        if(selectedPicker === "year") {
            setSelectedYear(payload);
        }

        setSelectedPicker(null);
        setShowPicker(false);
    }

    const onSelectDate = (selectedDatePayload: DatePickerProps) => {
        const currentAge = getAge(`${selectedDatePayload.year}-${selectedDatePayload.month}-${selectedDatePayload.day}`);
        const selectedDay = _.findWhere(DaysArray, {value: selectedDatePayload.day})
        const selectedMonth = _.findWhere(MonthsArr, {value: selectedDatePayload.month})
        const selectedYear = _.findWhere(yearList, {value: selectedDatePayload.year})
 
        if(!selectedYear || currentAge < 10) {
            Alert.alert(
                "Age Not Valid",
                "You must be at least 10 years old to use the app."
            );
            return;
        }

        setSelectedDay(selectedDay as PickerProps);
        setSelectedMonth(selectedMonth as PickerProps);
        setSelectedYear(selectedYear as PickerProps);
    }

    const getDateInfo = (date: string) => {
        const dateArr = date.split("-");
        const getYear = Number(dateArr[0]);
        const getMonth = Number(dateArr[1]);
        const getDay = Number(dateArr[2]);

        const selectedMonth = _.findWhere(MonthsArr, {value: getMonth})

        return {
            year: getYear,
            month: selectedMonth?.name,
            day: getDay
        }
    }

    const _onChangeCalendarMonth = () => {
        setSelectedPicker("month");
        setTimeout(() => setShowCalendarChangeMonth(true), 100)
    }

    const _onSelectMonth = (selectedDatePayload: PickerProps) => {
        setCurrentDate((oldDate: string) => {
            const dArr = oldDate.split("-");
            const newDate = `${dArr[0]}-${selectedDatePayload.value}-${dArr[2]}`
            return newDate;
        });

        setSelectedPicker(null);
        setTimeout(() => setShowCalendarChangeMonth(false), 100)
    }

    const _onChangeCalendarYear = () => {
        setSelectedPicker("year");
        setTimeout(() => setShowCalendarChangeYear(true), 100)
    }

    const _onSelectYear = (selectedDatePayload: PickerProps) => {
        setCurrentDate((oldDate: string) => {
            const dArr = oldDate.split("-");
            const newDate = `${selectedDatePayload.value}-${dArr[1]}-${dArr[2]}`
            return newDate;
        });

        setSelectedPicker(null);
        setTimeout(() => setShowCalendarChangeYear(false), 100)
    }
    
    return {
        _onPickDay, _onPickMonth, _onPickYear, showPicker, setShowPicker,
        pickerData, _onSelectPickerItem, selectedDay, selectedMonth, selectedYear,
        currentDate, onSelectDate, getDateInfo, showCalendar, setShowCalendar,
        _onChangeCalendarMonth, _onChangeCalendarYear, showCalendarChangeMonth,
        _onSelectMonth, showCalendarChangeYear, _onSelectYear
    }
}