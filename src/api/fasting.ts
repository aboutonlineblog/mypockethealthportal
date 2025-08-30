import {FetchRequest} from "@/mocks/index";
import {FastingTrackerHistoryRenderItem} from "@/screens/FastingTracker/FastingHistory/interafaces";
import {USE_MOCK_DATA} from "@/config/app";

export const getFastingHistory = async ({queryKey}: any) => {
    try {
        const queryClient = queryKey[1]["queryClient"];

        if(USE_MOCK_DATA === true) {
            const reqRes = await FetchRequest('/fasting');

            if(reqRes && reqRes instanceof Array) {
                reqRes?.map((itm: FastingTrackerHistoryRenderItem) => {
                    queryClient.setQueryData([`FASTING_HISTORY_ITEM_${itm.id}`], itm);
                })
            }

            return reqRes;
        } else {
            /** USE REMOTE BACKEND */
            return [];
        }
    } catch (error) {
        throw error;
    }
}

export const getFastingItem = async ({queryKey}: any) => {
    try {
        const id = queryKey[1]["id"];
        
        if(id === undefined) throw new Error("Unable to find data");

        const reqRes = await FetchRequest(`/fasting/${id}`, id);

        return reqRes;
    } catch (error) {
        throw error;
    }
}