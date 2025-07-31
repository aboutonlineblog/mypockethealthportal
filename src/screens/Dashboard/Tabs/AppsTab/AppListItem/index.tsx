import React from "react";
import {View, Text, ImageBackground, TouchableHighlight} from "react-native";
import {AppListItemProps} from "./interafaces";
import {useStyles, itemSpace} from "./index.styles";
import {useAppListItemHooks} from "./hooks";

const AppListItem = ({name, background, isLastItem, index, route}: AppListItemProps) => {
    /** HOOKS */
    const Styles = useStyles();
    const {_onPressItem} = useAppListItemHooks();

    /** VARIABLES */
    const Space = itemSpace(isLastItem, index);

    return (
        <TouchableHighlight style={[Styles.container, Space]} underlayColor="transparent" onPress={() => _onPressItem(route)}>
            <ImageBackground style={Styles.innerContainer} source={background} resizeMode="cover">
                <View style={Styles.overlay}>
                    <Text style={Styles.itemName}>{name}</Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default React.memo(AppListItem);