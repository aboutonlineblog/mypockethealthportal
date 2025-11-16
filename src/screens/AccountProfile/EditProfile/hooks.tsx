import React from "react";
import {TextInput} from "react-native";
import {getState} from "@/helpers/GlobalState";
import {useQuery} from "@tanstack/react-query";
import {getUserInfo} from "@/api/user";

export const useEditProfile = () => {
    const currentUserId = getState("currentLoginUser", "id");
    const {data: userInfo} = useQuery({
        queryKey: [`CURRENT_LOGIN_USER_${currentUserId}`, {id: currentUserId}],
        queryFn: getUserInfo,
        staleTime: Infinity,
        gcTime: Infinity,
    });

    const fNameRef = React.useRef<TextInput>(null);
    const [fname, setFirstName] = React.useState<string>('');

    const lNameRef = React.useRef<TextInput>(null);
    const [lname, setLastName] = React.useState<string>('');

    const [height, setHeight] = React.useState<string>('');
    const [weight, setWeight] = React.useState<string>('');
    const [gender, setGender] = React.useState<string>('');
    const [birthdate, setBirthdate] = React.useState<string>('');

    React.useEffect(() => {
        /** PRE-FILL THE INPUTS */
        console.log("userInfo", userInfo)
        if(userInfo) {
            const fnameVal = userInfo?.first_name ?? '';
            const lnameVal = userInfo?.last_name ?? '';
            const genderVal = userInfo?.gender ?? '';
            const heightVal = userInfo?.height ?? '';
            const weightVal = userInfo?.weight ?? '';
            const birthdateVal = userInfo?.birthdate ?? '';

            setFirstName(fnameVal); 
            setLastName(lnameVal); 
            setGender(genderVal);
            setHeight(heightVal.toString());
            setWeight(weightVal.toString());
            setBirthdate(birthdateVal);
        }
    }, [
        userInfo, setFirstName, setLastName, setGender, setHeight, setWeight
    ])

    const _onChangeInputValue = (
        val: string, 
        type: "fname" | "lname" | "gender" | "weight" | "height" | "birthdate"
    ) => {
        if(type === "fname") {
            setFirstName(val);
        }
        if(type === "lname") {
            setLastName(val);
        }
    }

    const _onNextInput = (
        nextInput: "fname" | "lname" | "gender" | "weight" | "height" | "birthdate"
    ) => {
        if(nextInput === "fname") {
            fNameRef.current?.focus();
        }
        if(nextInput === "lname") {
            lNameRef.current?.focus();
        }
        if(nextInput === "gender") {
            // trigger a drop down
        }
    }

    return {
        fNameRef, lNameRef, fname, lname, height, weight, gender, birthdate,
        setFirstName, _onChangeInputValue, _onNextInput
    }
}