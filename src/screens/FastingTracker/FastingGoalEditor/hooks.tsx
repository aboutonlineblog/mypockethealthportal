import React from "react";
import {FastinGoalEditorProps} from "./interafaces";

export const useFastingEditor = ({setGoalTimeType, setGoal, onClose}: FastinGoalEditorProps) => {
    const [editPayload, setEditPayload] = React.useState<null | "day" | "hour" | "minute">(null);
    const [day, setDay] = React.useState<string>("");
    const [hour, setHour] = React.useState<string>("");
    const [minute, setMinute] = React.useState<string>("");
    const [selectedOption, setSelectedOption] = React.useState<string>("hour");
    const [editEnabled, setEditStatus] = React.useState<boolean>(false);

    const _onEditGoal = (type: "day" | "hour" | "minute") => {
        setEditPayload(type);
        setEditStatus(true);
    }

    const _onSaveChanges = () => {
        setEditStatus(false);

        if(day !== "") {
            setGoal(day);
        } else if(hour !== "") {
            setGoal(hour);
        } else if(minute !== "") {
            setGoal(minute);
        } else {}

        setGoalTimeType(editPayload);
    }

    const _onSaveFastingGoal = () => {
        if(onClose) onClose();
    }

    const _onUpdateGoalValue = (type: string, value: string) => {
        if(type === "day") {
            setDay(value);
        }
        if(type === "hour") {
            setHour(value);
        }
        if(type === "minute") {
            setMinute(value);
        }
    }

    return {
        editPayload, setEditPayload, _onEditGoal, _onSaveChanges,
        day, hour, minute, _onUpdateGoalValue, _onSaveFastingGoal,
        selectedOption, setSelectedOption, editEnabled, setEditStatus
    }
}