import {useInfiniteQuery} from "@tanstack/react-query";
import _ from "underscore";

import {getStepsHistory} from "@/api/steps";

export const useStepsHistoryHooks = () => {
    const {
        data,
        isLoading,
        isFetching,
        isRefetching,
        fetchNextPage,
        refetch,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['STEPS_HISTORY'],
        queryFn: getStepsHistory,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            return lastPageParam + 1;
        },
    });

    const stepsHistory = data ? _.flatten(data.pages) : [];

    return {
        stepsHistory,
        isLoading,
        isFetching,
        isRefetching,
        fetchNextPage,
        refetch,
        isFetchingNextPage
    }
}