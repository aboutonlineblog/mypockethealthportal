import React, {useCallback} from "react";
import {View, Text, FlatList} from "react-native";
import {useStyles} from "./index.styles";
import {useStepsHistoryHooks} from "./hooks";
import StepsTrackerHistoryItem from "./StepsHistoryItem";
import {StepsHistoryRenderItemProps} from "./interafaces";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const StepsTrackerHistory = () => {
    const Styles = useStyles();
    const {stepsHistory} = useStepsHistoryHooks();

    const RenderItem = useCallback(({item}: StepsHistoryRenderItemProps) => {
        return (
            <StepsTrackerHistoryItem {...item} />
        );
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles.container} edges={["bottom"]}>
                <View style={Styles.container}>
                    <FlatList
                        data={stepsHistory}
                        keyExtractor={(item: any) => item.id.toString()}
                        renderItem={RenderItem}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default StepsTrackerHistory;