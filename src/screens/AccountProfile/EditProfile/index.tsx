import React from "react";
import {View, Text, TextInput} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {useEditProfile} from "./hooks";
import Button from "@/modules/Button";
import {convertToReadableDateFormat} from "@/helpers/DayTimeFormat";

const EditProfile = () => {
    const Styles = useStyles();
    const GlobalStyles = useGlobalStyles();
    const {
        fNameRef, lNameRef, fname, lname, height, weight, gender, birthdate,
        _onChangeInputValue, _onNextInput
    } = useEditProfile();

    return (
        <View style={Styles.container}>
            <View style={GlobalStyles.inputWrapper}>
                <Text style={Styles.formLabel}>First Name</Text>
                <TextInput 
                    ref={fNameRef}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    value={fname}
                    style={[GlobalStyles.input, Styles.input]} 
                    placeholder="Enter your first name" 
                    placeholderTextColor="#b5b5b5"
                    onChangeText={(val: string) => _onChangeInputValue(val, 'fname')}
                    returnKeyType="next"
                    onSubmitEditing={() => _onNextInput("lname")}
                />
            </View>
            <View style={GlobalStyles.inputWrapper}>
                <Text style={Styles.formLabel}>Last Name</Text>
                <TextInput 
                    ref={fNameRef}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    value={lname}
                    style={[GlobalStyles.input, Styles.input]} 
                    placeholder="Enter your last name" 
                    placeholderTextColor="#b5b5b5"
                    onChangeText={(val: string) => _onChangeInputValue(val, 'gender')}
                    returnKeyType="next"
                    onSubmitEditing={() => _onNextInput("gender")}
                />
            </View>
            <View style={GlobalStyles.inputWrapper}>
                <Text style={Styles.formLabel}>Weight</Text>
                <TextInput 
                    ref={fNameRef}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    value={weight}
                    style={[GlobalStyles.input, Styles.input]} 
                    placeholder="Enter your weight" 
                    placeholderTextColor="#b5b5b5"
                    onChangeText={(val: string) => _onChangeInputValue(val, 'weight')}
                    returnKeyType="next"
                    onSubmitEditing={() => _onNextInput("weight")}
                />
            </View>
            <View style={GlobalStyles.inputWrapper}>
                <Text style={Styles.formLabel}>Height</Text>
                <TextInput 
                    ref={fNameRef}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    value={height}
                    style={[GlobalStyles.input, Styles.input]} 
                    placeholder="Enter your height" 
                    placeholderTextColor="#b5b5b5"
                    onChangeText={(val: string) => _onChangeInputValue(val, 'height')}
                    returnKeyType="next"
                    onSubmitEditing={() => _onNextInput("height")}
                />
            </View>
            <View style={GlobalStyles.inputWrapper}>
                <Text style={Styles.formLabel}>Gender</Text>
                <TextInput 
                    ref={fNameRef}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    value={gender}
                    style={[GlobalStyles.input, Styles.input]} 
                    placeholder="Select your gender" 
                    placeholderTextColor="#b5b5b5"
                    onChangeText={(val: string) => _onChangeInputValue(val, 'fname')}
                    returnKeyType="next"
                    onSubmitEditing={() => _onNextInput("lname")}
                />
            </View>
            <View style={GlobalStyles.inputWrapper}>
                <Text style={Styles.formLabel}>Birthdate</Text>
                <TextInput 
                    ref={fNameRef}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    value={convertToReadableDateFormat(birthdate)}
                    style={[GlobalStyles.input, Styles.input]} 
                    placeholder="Select birthdate" 
                    placeholderTextColor="#b5b5b5"
                    onChangeText={(val: string) => _onChangeInputValue(val, 'birthdate')}
                    returnKeyType="next"
                    onSubmitEditing={() => _onNextInput("birthdate")}
                />
            </View>
            <Button label="Submit" onPress={() => {}} />
        </View>
    )
}

export default React.memo(EditProfile);