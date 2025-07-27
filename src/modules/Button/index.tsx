import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useGlobalStyles} from "@/config/globalStyles.styles";

interface ButtonProps {
    label?: string;
    onPress?: (val?: any) => void;
}

const Button = ({label, onPress}: ButtonProps) => {
    const GlobalStyle = useGlobalStyles();
    
    return (
        <TouchableOpacity {...{onPress}} style={GlobalStyle.button} activeOpacity={0.8}>
            <View>
                <Text style={GlobalStyle.buttonLabel}>{label ? label : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(Button);