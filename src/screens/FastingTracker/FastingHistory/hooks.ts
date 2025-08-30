import {useInfiniteQuery} from "@tanstack/react-query";
import _ from "underscore";
import {useQueryClient} from "@tanstack/react-query";
import {getFastingHistory} from "@/api/fasting";
import {FastingTrackerHistoryRenderItem} from "./interafaces";

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
    
    const fastingHistory: Array<any> = data && data?.pages ? _.flatten(data?.pages) : [];

    const _onLoadMore = (numOfItems: number, limit: number, loadmore: Function,) => {
        if (numOfItems >= limit) {
            loadmore();
        }
    }

    const loadingItems = [{id: '1'}, {id: '2'}, {id: '3'}];

    return {
        fastingHistory,
        isLoading,
        isFetching,
        isRefetching,
        fetchNextPage,
        refetch,
        isFetchingNextPage,
        _onLoadMore,
        loadingItems
    }
}