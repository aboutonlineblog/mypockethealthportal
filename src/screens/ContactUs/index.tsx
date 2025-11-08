import React from "react";
import {View, Text, TextInput, Image} from "react-native";
import {useStyles} from "./index.styles";
import DropDownPicker from "@/modules/DropDownPicker";
import {SafeAreaView} from "react-native-safe-area-context";
import DropDownData from "./list_of_concerns.json";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import Button from "@/modules/Button";
import {useContactUs} from "./hooks";
import {ListOfConcernsProps} from "@/modules/DropDownPicker/interafaces";
import MailBoxIcon from "./assets/mailbox.png";

const ContactUs = () => {
    const Styles = useStyles();
    const GlobalStyle = useGlobalStyles();
    const {sendQueryMutation, setSelectedConcern, setMessage, message, messageSent, _onBack} = useContactUs();

    if(messageSent === true) {
        return (
            <SafeAreaView style={Styles.safeArea} edges={["bottom"]}>
                <View style={[Styles.container]}>
                    <Image source={MailBoxIcon} resizeMode="contain" style={Styles.iconWrapper} />
                    <Text style={Styles.thankyou}>Thank You!</Text>
                    <View style={Styles.messageWrapper}>
                        <Text style={Styles.message}>{`We’ve received your message! Our team will get back to you shortly through your registered email address.`}</Text>
                    </View>

                    <Button 
                        label="Back" 
                        onPress={_onBack}
                        buttonStyle={Styles.backBtn} />
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={Styles.safeArea} edges={["bottom"]}>
            <View style={Styles.container}>
                <View style={Styles.formContainer}>
                    <DropDownPicker 
                        formLabel="Select your concern:"
                        data={DropDownData}
                        onSelect={(v: ListOfConcernsProps) => {
                            setSelectedConcern(v);
                        }}
                    />

                    <View style={GlobalStyle.formWrapper}>
                        <Text style={GlobalStyle.formLabel}>Message:</Text>
                        <TextInput
                            placeholder="Your message here"
                            placeholderTextColor={Colors.placeholderColor}
                            style={GlobalStyle.textAreaMedium}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={message}
                            onChangeText={(t: string) => setMessage(t)}
                        />
                        <Text>Characters: {message.length}</Text>
                    </View>

                    <Button 
                        label="Submit" 
                        onPress={sendQueryMutation.mutate}
                        buttonStyle={Styles.btnStyle} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ContactUs;