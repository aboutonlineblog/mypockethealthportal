import React, {useCallback} from "react";
import {View, Text, FlatList} from "react-native";
import MenuList from "./menu_list";
import useStyles from "./index.styles";
import MenuItem from "./MenuItem";
import {MenuRenderProps} from "./interafaces";

const SettingsTab = () => {
    const Styles = useStyles();

    const RenderItem = useCallback(({item}: MenuRenderProps) => {
        return (
            <MenuItem {...item} />
        )
    }, [])

    return (
        <View style={Styles.container}>
            <FlatList
                data={MenuList}
                renderItem={RenderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default SettingsTab;