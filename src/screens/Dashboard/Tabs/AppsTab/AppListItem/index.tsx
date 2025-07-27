import React from "react";
import {View, Text, ImageBackground, TouchableHighlight} from "react-native";
import {AppListItemProps} from "./interafaces";
import {useStyles, itemSpace} from "./index.styles";

const AppListItem = ({name, background, isLastItem, index}: AppListItemProps) => {
    const Styles = useStyles();
    const Space = itemSpace(isLastItem, index);

    return (
        <TouchableHighlight style={[Styles.container, Space]} underlayColor="transparent">
            <ImageBackground style={Styles.innerContainer} source={background} resizeMode="cover">
                <View style={Styles.overlay}>
                    <Text style={Styles.itemName}>{name}</Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default React.memo(AppListItem);