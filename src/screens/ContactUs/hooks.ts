import React from "react";
import {ListOfConcernsProps} from "@/modules/DropDownPicker/interafaces";
import {postContactApi} from "@/api/contactUs";
import {useMutation} from "@tanstack/react-query";
import {Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";

type ConcernPayloadProps = {
    message: string;
    type: "feedback" | "feature_request" | "support" | "bug_report" | null
}

export const useContactUs = () => {
    const navigation = useNavigation();
    const [selectedConcern, setSelectedConcern] = React.useState<ListOfConcernsProps | null>(null);
    const [message, setMessage] = React.useState<string>("");
    const [messageSent, setMessageSentStatus] = React.useState<boolean>(false);

    const concernPayload = React.useMemo(() => {
        return {
            message,
            type: selectedConcern?.id ?? null,
        }
    }, [selectedConcern, message])

    const _onSubmitQuery = async () => {
        try {
            const onRes = await postContactApi(concernPayload as ConcernPayloadProps);
            console.log("onRes", onRes)
            return onRes;
        } catch (error) {
            throw error;
        }
    }

    const sendQueryMutation = useMutation({
        mutationFn: _onSubmitQuery,
        onSuccess: (data) => {
            setMessageSentStatus(true);
        },
        onError: (error) => {
            Alert.alert(
                "Submission Error",
                error.message,
            )
        },
        onSettled: (data, error) => {
            // do something here if needed
        },
    })

    const _onBack = () => navigation.goBack();

    return {
        sendQueryMutation, setSelectedConcern, setMessage, message, messageSent, _onBack
    }
}