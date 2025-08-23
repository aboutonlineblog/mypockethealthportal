import {useInfiniteQuery} from "@tanstack/react-query";
import _ from "underscore";
import {useQueryClient} from "@tanstack/react-query";
import {getFastingHistory} from "@/api/fasting";

export const useFastingTrackerHooks = () => {
    const queryClient = useQueryClient();
    const {
        data,
        isLoading,
        isFetching,
        isRefetching,
        fetchNextPage,
        refetch,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['FASTING_HISTORY', {queryClient}],
        queryFn: getFastingHistory,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            return lastPageParam + 1;
        },
    });
    
    const fastingHistory = data ? _.flatten(data.pages) : [];

    return {
        fastingHistory,
        isLoading,
        isFetching,
        isRefetching,
        fetchNextPage,
        refetch,
        isFetchingNextPage
    }
}