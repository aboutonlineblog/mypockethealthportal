import React, {useCallback} from "react";
import {View, Text, FlatList} from "react-native";
import {RenderItemProps} from "./interafaces";

/** UTILS */
import AppList from "./app_list";
import useStyle from "./index.styles";

/** MODULES */
import AppListItem from "./AppListItem";

const AppsTab = () => {
    const Styles = useStyle();

    const RenderItem = useCallback(({item, index}: RenderItemProps) => {
        const isLastItem = index === (AppList?.length - 1) ? true : false;
        const newItemData = {...item, isLastItem, index};

        return (
            <AppListItem {...newItemData} />
        )
    }, [])

    return (
        <View>
            <FlatList
                data={AppList}
                renderItem={RenderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default AppsTab;