import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";

const ContactUs = () => {
    const Styles = useStyles();

    return (
        <View style={Styles.container}>
            <Text>Diary screen</Text>
        </View>
    )
}

export default ContactUs;