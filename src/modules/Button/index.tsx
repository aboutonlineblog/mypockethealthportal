import React from "react";
import {View, Text, TouchableOpacity, ImageSourcePropType, Image, ViewStyle, TextStyle} from "react-native";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {useStyles} from "./index.styles";

interface ButtonProps {
    label?: string;
    onPress?: (val?: any) => void;
    width?: number;
    icon?: ImageSourcePropType;
    buttonStyle?: ViewStyle;
    buttonLabelStyle?: TextStyle;
}

const Button = ({label, onPress, width, icon, buttonStyle = {}, buttonLabelStyle = {}}: ButtonProps) => {
    const GlobalStyle = useGlobalStyles();
    const Styles = useStyles();
    const withIconStyle = icon ? {marginLeft: 10} : {};
    
    return (
        <TouchableOpacity {...{onPress}} style={[GlobalStyle.button, buttonStyle]} activeOpacity={0.8}>
            <View style={Styles.container}>
                {icon && (<Image source={icon} style={Styles.iconContainer} />)}
                <Text style={[GlobalStyle.buttonLabel, withIconStyle, buttonLabelStyle]}>{label ? label : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(Button);