import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";
import {FastingTrackerHistoryRenderItem} from '../interafaces';
import {getAmPm, Months} from "@/helpers/DayTimeFormat";

const FastingTrackerItem = ({start_time, end_time}: FastingTrackerHistoryRenderItem) => {
    const Styles = useStyles();

    const START_NEW_DATE = new Date(start_time);
    const START_DATE = `${Months[START_NEW_DATE.getMonth()]} ${START_NEW_DATE.getDay()}, ${START_NEW_DATE.getFullYear()}`;
    const START_DAY_HOURS =  START_NEW_DATE.getHours();
    const START_DAY_MINUTES =  START_NEW_DATE.getMinutes();

    const END_NEW_DATE = end_time ? new Date(end_time) : '';
    const END_DATE = END_NEW_DATE !== '' ? `${Months[END_NEW_DATE.getMonth()]} ${END_NEW_DATE.getDay()}, ${END_NEW_DATE.getFullYear()}` : '';
    const END_DAY_HOURS =  END_NEW_DATE !== '' ? END_NEW_DATE.getHours() : '';
    const END_DAY_MINUTES =  END_NEW_DATE !== '' ? END_NEW_DATE.getMinutes() : '';

    return (
        <View style={Styles.container}>
            <View style={Styles.trackerContainer}>
                <View style={Styles.boxConnector}>
                    <View style={Styles.fastingRangeContainer}>
                        <Text style={Styles.rangeLabel}>5 <Text style={Styles.rangeLabelUnit}>hrs</Text></Text>
                    </View>
                </View>
            </View>
            <View style={Styles.timeStampContainer}>
                <View style={Styles.timeStampWrapper}>
                    <View style={[Styles.displayTimeContainer, Styles.startTimeContainer]}>
                        <Text style={Styles.timeTitleLabel}>START TIME</Text>
                        <Text style={Styles.timeStamp}>
                            {START_DAY_HOURS}:{START_DAY_MINUTES < 10 ? `0${START_DAY_MINUTES}` : START_DAY_MINUTES} {getAmPm(START_DAY_HOURS)}
                        </Text>
                        <Text style={Styles.dayDateStamp}>{START_DATE}</Text>
                    </View>
                </View>
                <View style={Styles.timeStampWrapper}>
                    <View style={[Styles.displayTimeContainer, Styles.endTimeContainer]}>
                        <Text style={Styles.timeTitleLabel}>END TIME</Text>
                        {END_NEW_DATE !== '' && END_DAY_MINUTES !== '' && END_DAY_HOURS !== '' ? (<Text style={Styles.timeStamp}>
                            {END_DAY_HOURS}:{END_DAY_MINUTES < 10 ? `0${END_DAY_MINUTES}` : END_DAY_MINUTES} {getAmPm(END_DAY_HOURS)}
                        </Text>) : (
                            <Text style={Styles.timeStamp}>
                                <Text>In Progress</Text>
                            </Text>
                        )}
                        <Text style={Styles.dayDateStamp}>{END_DATE}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FastingTrackerItem;