import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {useStyles} from "./index.styles";
import {useBirthdatePicker} from "./hooks";
import Icon from "react-native-vector-icons/FontAwesome";
import {Colors} from "@/config/theme";
import {PickerProps} from "./interafaces";

const BirthdatePicker = () => {
    const Styles = useStyles();
    const {
        _onPickDay, _onPickMonth, _onPickYear, showPicker, setShowPicker, pickerData,
        _onSelectPickerItem, selectedDay, selectedMonth, selectedYear
    } = useBirthdatePicker();

    return (
        <View style={Styles.container}>
            <Text style={Styles.headerStyle}>Tell use your birthdate.</Text>
            <Text style={Styles.headerDescStyle}>{`This allows us to calculate your age so the\nplatform can provide a good result.`}</Text>

            <View>
                <View style={Styles.pickerContainer}>
                    <View style={Styles.birthdateLabelContainer}>
                        <Text style={Styles.birthdateLabel}>
                            <Text style={Styles.label} onPress={_onPickDay}>{!selectedDay ? "DD" : selectedDay.label}</Text> / <Text style={Styles.label} onPress={_onPickMonth}>{!selectedMonth ? "MM" : selectedMonth.label}</Text> / <Text style={Styles.label} onPress={_onPickYear}>{!selectedYear ? "YYYY" : selectedYear.label}</Text>
                        </Text>
                    </View>
                    <View style={Styles.calendarButton}>
                        <Icon name="calendar"size={25} color={Colors.black} />
                    </View>
                </View>
                {showPicker && (<View style={Styles.pickerItemsContainer}>
                    <ScrollView>
                        {
                            pickerData.map((d: PickerProps, dIndex: number) => (
                                <TouchableOpacity key={`d-${dIndex}`} style={Styles.pickerItem} onPress={() => _onSelectPickerItem(d)}>
                                    <Text style={Styles.pickerItemLabel}>{d.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>)}
            </View>

            <View style={Styles.footer}>
                <View style={Styles.buttonsContainer}>
                    <TouchableOpacity style={Styles.footerButton}>
                        <Text style={Styles.footerButtonLabel}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.footerButton}>
                        <Text style={Styles.footerButtonLabel}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BirthdatePicker;