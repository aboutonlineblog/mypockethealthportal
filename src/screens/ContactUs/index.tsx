import React from "react";
import {View, ScrollView} from "react-native";
import {useStyles} from "./index.styles";
import DropDownPicker from "@/modules/DropDownPicker";
import {SafeAreaView} from "react-native-safe-area-context";
import DropDownData from "./list_of_concerns.json";

const ContactUs = () => {
    const Styles = useStyles();

    return (
        <SafeAreaView style={Styles.safeArea} edges={["bottom"]}>
            <View style={Styles.container}>
                <View style={Styles.formContainer}>
                    <DropDownPicker 
                        formLabel="Select your concern"
                        data={DropDownData}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ContactUs;