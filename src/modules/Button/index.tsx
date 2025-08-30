import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useGlobalStyles} from "@/config/globalStyles.styles";

interface ButtonProps {
    label?: string;
    onPress?: (val?: any) => void;
    width?: number;
}

const Button = ({label, onPress, width}: ButtonProps) => {
    const GlobalStyle = useGlobalStyles();
    const buttonStyle = width ? {width} : {};
    
    return (
        <TouchableOpacity {...{onPress}} style={[GlobalStyle.button, buttonStyle]} activeOpacity={0.8}>
            <View>
                <Text style={GlobalStyle.buttonLabel}>{label ? label : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(Button);