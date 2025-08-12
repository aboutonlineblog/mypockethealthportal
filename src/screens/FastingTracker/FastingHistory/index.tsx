import React, {useCallback} from "react";
import {View, FlatList} from "react-native";
import {useStyles} from "./index.styles";
import {useFastingTrackerHooks} from "./hooks";
import FastingTrackerItem from "./FastingTrackerItem";

const FastingTrackerHistory = () => {
    const Styles = useStyles();
    const {fastingHistory} = useFastingTrackerHooks();

    const RenderItem = useCallback(({item}: any) => {
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
            />
        </View>
    )
}

export default FastingTrackerHistory;