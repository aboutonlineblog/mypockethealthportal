import React from "react";
import {useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import {FetchRequest} from "@/mocks/index";
import {getFastingItem} from "@/api/fasting";
import {FastingTrackerHistoryRenderItem} from '../interafaces';

export const useFastingTrackerItem = (id: string | number) => {
    const queryClient = useQueryClient();
    const {data, isLoading}: UseQueryResult = useQuery({
        queryKey: [`FASTING_HISTORY_ITEM_${id}`, {id}],
        queryFn: getFastingItem,
        initialData: () => {
            return queryClient.getQueryData([`FASTING_HISTORY_ITEM_${id}`]);
        }
    });

    const fastingInfo = data as FastingTrackerHistoryRenderItem;

    return {fastingInfo, isLoading}
}

export const useRenderTrackerHistoryItem = () => {
    const getHoursMinutes = (durationInSec: number) => {
        const hours = Math.floor((durationInSec / 60) / 60);
        const minutes = Math.floor(durationInSec / 60);
        const seconds = Math.floor(durationInSec % 60);

        return {
            hours,
            minutes,
            seconds
        }
    }

    return {getHoursMinutes}
}