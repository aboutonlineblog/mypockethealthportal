import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "./index.styles";
import {MenuRenderItemProps} from "./interafaces";

const MenuItem = ({name, id}: MenuRenderItemProps) => {
    const Styles = useStyles();

    return (
        <TouchableOpacity activeOpacity={0.85}>
            <View style={Styles.container}>
                {name.includes("dev-") ? null : <Text>{name}</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default MenuItem;