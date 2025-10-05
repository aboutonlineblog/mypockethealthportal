import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {useStyles} from "./index.styles";
import {useBirthdatePicker} from "./hooks";
import Icon from "react-native-vector-icons/FontAwesome";
import {Colors} from "@/config/theme";
import {PickerProps, OnBoardingProps} from "./interafaces";
import {Calendar} from 'react-native-calendars';

const BirthdatePicker = ({onNext, onSkip, onChange}: OnBoardingProps) => {
    const Styles = useStyles();
    const {
        _onPickDay, _onPickMonth, _onPickYear, showPicker, setShowPicker, pickerData,
        _onSelectPickerItem, selectedDay, selectedMonth, selectedYear, currentDate,
        onSelectDate, getDateInfo, showCalendar, setShowCalendar, _onChangeCalendarMonth, 
        _onChangeCalendarYear, showCalendarChangeMonth, _onSelectMonth, showCalendarChangeYear,
        _onSelectYear
    } = useBirthdatePicker({onChange});

    return (
        <View style={Styles.container}>
            <Text style={Styles.headerStyle}>Tell us your birthdate.</Text>
            <Text style={Styles.headerDescStyle}>{`This allows us to calculate your age so the\nplatform can provide a good result.`}</Text>

            <View>
                <View style={Styles.pickerContainer}>
                    <View style={Styles.birthdateLabelContainer}>
                        <Text style={Styles.birthdateLabel}>
                            <Text style={Styles.label} onPress={_onPickDay}>{!selectedDay ? "DD" : selectedDay.label}</Text> / <Text style={Styles.label} onPress={_onPickMonth}>{!selectedMonth ? "MM" : selectedMonth.label}</Text> / <Text style={Styles.label} onPress={_onPickYear}>{!selectedYear ? "YYYY" : selectedYear.label}</Text>
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
                        <View style={Styles.calendarButton}>
                            <Icon name="calendar"size={25} color={Colors.black} />
                        </View>
                    </TouchableOpacity>
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

                {showCalendar && (<View style={Styles.calendarContainer}>
                    {showCalendarChangeMonth ? (
                        <ScrollView>
                        {
                            pickerData.map((m: PickerProps, dIndex: number) => (
                                <TouchableOpacity key={`d-${dIndex}`} style={Styles.pickerItem} onPress={() => _onSelectMonth(m)}>
                                    <Text style={Styles.pickerItemLabel}>{m.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        </ScrollView>
                    ) : showCalendarChangeYear ? (
                        <ScrollView>
                        {
                            pickerData.map((y: PickerProps, dIndex: number) => (
                                <TouchableOpacity key={`d-${dIndex}`} style={Styles.pickerItem} onPress={() => _onSelectYear(y)}>
                                    <Text style={Styles.pickerItemLabel}>{y.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        </ScrollView>
                    ) : (<Calendar
                        current={currentDate}
                        onDayPress={onSelectDate}
                        hideArrows={true}
                        renderHeader={() => <View style={Styles.calendarHeader}>
                            <TouchableOpacity style={Styles.calendarHeaderButton} onPress={_onChangeCalendarMonth}>
                                <Text style={Styles.calendarHeaderButtonLabel}>{getDateInfo(currentDate).month}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.calendarHeaderButton} onPress={_onChangeCalendarYear}>
                                <Text style={Styles.calendarHeaderButtonLabel}>{getDateInfo(currentDate).year}</Text>
                            </TouchableOpacity>
                        </View>}
                    />)}
                </View>)}
            </View>

            <View style={Styles.footer}>
                <View style={Styles.buttonsContainer}>
                    <TouchableOpacity style={Styles.footerButton} onPress={() => {
                        if(onSkip) onSkip();
                    }}>
                        <Text style={Styles.footerButtonLabel}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.footerButton} onPress={() => {
                        if(onNext) onNext();
                    }}>
                        <Text style={Styles.footerButtonLabel}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BirthdatePicker;