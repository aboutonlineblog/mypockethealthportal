import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "./index.styles";
import {MenuRenderItemProps} from "./interafaces";
import {useMenuItemHooks} from "./hooks";

const MenuItem = ({name, id, route}: MenuRenderItemProps) => {
    const Styles = useStyles();
    const {_onPressMenuItem} = useMenuItemHooks();

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={() => _onPressMenuItem(route)}>
            <View style={Styles.container}>
                {name.includes("dev-") ? null : <Text>{name}</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default MenuItem;