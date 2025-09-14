import React, {useState, useMemo} from "react";
import {DaysArray, MonthsArr, YearArr} from "@/helpers/DayTimeFormat";
import {PickerProps} from "./interafaces";

export const useBirthdatePicker = () => {
    const [selectedPicker, setSelectedPicker] = useState<null | "day" | "month" | "year">(null);
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<null | PickerProps>(null);
    const [selectedMonth, setSelectedMonth] = useState<null | PickerProps>(null);
    const [selectedYear, setSelectedYear] = useState<null | PickerProps>(null);

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
    
    return {
        _onPickDay, _onPickMonth, _onPickYear, showPicker, setShowPicker,
        pickerData, _onSelectPickerItem, selectedDay, selectedMonth, selectedYear
    }
}