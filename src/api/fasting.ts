import {FetchRequest} from "@/mocks/index";
import {FastingTrackerHistoryRenderItem} from "@/screens/FastingTracker/FastingHistory/interafaces"

export const getFastingHistory = async ({queryKey}: any) => {
    const queryClient = queryKey[1]["queryClient"];
    const reqRes = await FetchRequest('/fasting');
    console.log("queryKey", queryKey)
    console.log("reqRes", reqRes)

    if(reqRes && reqRes instanceof Array) {
        reqRes?.map((itm: FastingTrackerHistoryRenderItem) => {
            queryClient.setQueryData([`FASTING_HISTORY_${itm.id}`], itm);
        })
    }

    return reqRes;
}