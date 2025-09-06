import React, {useCallback} from "react";
import {View, FlatList, RefreshControl, ActivityIndicator, Text} from "react-native";
import {useStyles} from "./index.styles";
import {useFastingTrackerHooks} from "./hooks";
import FastingTrackerItem from "./FastingTrackerItem";
import {FastingTrackerHistoryRenderItemProps, LoadingItemProps} from "./interafaces";
import {Colors} from "@/config/theme";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useStyles as useFastingTrackerItemStyle} from "./FastingTrackerItem/index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import Button from "@/modules/Button";

const FastingTrackerHistory = () => {
    const Styles = useStyles();
    const FastingTrackerItemStyles = useFastingTrackerItemStyle();
    const GlobalStyles = useGlobalStyles();
    const {fastingHistory, isFetching, refetch, fetchNextPage, isFetchingNextPage, _onLoadMore, loadingItems, isLoading} = useFastingTrackerHooks();
    const RenderItem = useCallback(({item}: FastingTrackerHistoryRenderItemProps) => {
        return (
            <FastingTrackerItem {...item} />
        );
    }, [])

    return (
        <View style={Styles.container}>
            <FlatList
                data={fastingHistory}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={RenderItem}
                contentContainerStyle={Styles.listStyle}
                refreshControl={
                    <RefreshControl
                        refreshing={isFetching}
                        onRefresh={() => {
                            refetch();
                        }}
                        tintColor={Colors.button_color_normal}
                    />
                }
                onEndReached={() =>
                    _onLoadMore(fastingHistory.length, 15, fetchNextPage)
                }
                ListEmptyComponent={() => {
                    if(isLoading === true) {
                        return (
                            <View>
                                {
                                    loadingItems.map((itm: LoadingItemProps) => {
                                        return (
                                            <View key={`skeleton_${itm.id}`} style={FastingTrackerItemStyles.skeletonContainer}>
                                                <View style={FastingTrackerItemStyles.skeletnWrapper}>
                                                    <SkeletonPlaceholder>
                                                        <SkeletonPlaceholder.Item 
                                                            borderRadius={8}
                                                            width={FastingTrackerItemStyles.skeletonContainer.width * 0.9} 
                                                            height={FastingTrackerItemStyles.skeletonContainer.height} />
                                                    </SkeletonPlaceholder>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }

                    if(isLoading === false && fastingHistory.length < 1) {
                        return (
                            <View style={GlobalStyles.emptyDataContainer}>
                                <Text style={Styles.emptyMessageLabel}>No data available.</Text>
                                <Button label="Retry" buttonStyle={{
                                    width: GlobalStyles.emptyDataContainer.width * 0.4
                                }} onPress={() => refetch()} />
                            </View>
                        )
                    }

                    return null;
                }}
            />

            {isFetchingNextPage && (<View style={Styles.footerLoader}>
                <ActivityIndicator size="large" color={Colors.tab_active_color} />
            </View>)}
        </View>
    )
}

export default FastingTrackerHistory;