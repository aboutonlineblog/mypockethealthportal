import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "./index.styles";
import {MenuRenderItemProps} from "./interafaces";
import {useMenuItemHooks} from "./hooks";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Colors} from "@/config/theme";

const MenuItem = ({name, id, route, icon, from}: MenuRenderItemProps) => {
    const Styles = useStyles();
    const {_onPressMenuItem} = useMenuItemHooks();

    return (
        <TouchableOpacity style={Styles.menuBtn} activeOpacity={0.85} onPress={() => _onPressMenuItem(route)}>
            {icon !== null && (<View style={Styles.iconContainer}>
                {
                    from === "FontAwesome6" ? (
                        <FontAwesome6 name={icon} size={20} color={Colors.text_dark_color} />
                    ) : (
                        <MaterialIcons name={icon} size={20} color={Colors.text_dark_color} />
                    )
                }
            </View>)}
            <View style={Styles.container}>
                {name.includes("dev-") ? null : <Text style={Styles.label}>{name}</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default MenuItem;