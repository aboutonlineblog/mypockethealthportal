import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";
import {FastingTrackerItemProps, FastingTrackerHistoryRenderItem} from '../interafaces';
import {getAmPm, Months} from "@/helpers/DayTimeFormat";
import {useFastingTrackerItem, useRenderTrackerHistoryItem} from "./hooks";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RenderTrackerHistoryItem = ({start_time, end_time, fasting_range}: FastingTrackerHistoryRenderItem) => {
    const Styles = useStyles();
    const {getHoursMinutes} = useRenderTrackerHistoryItem();

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
                        {
                            getHoursMinutes(fasting_range).hours > 0 ? (
                                <Text style={Styles.rangeLabel}>
                                    {getHoursMinutes(fasting_range).hours} 
                                    <Text style={Styles.rangeLabelUnit}> hrs{'\n'} 
                                        {getHoursMinutes(fasting_range).minutes} min
                                    </Text>
                                </Text>
                            ) : getHoursMinutes(fasting_range).minutes > 0 ? (
                                <Text style={Styles.rangeLabel}>
                                    {getHoursMinutes(fasting_range).minutes} 
                                    <Text style={Styles.rangeLabelUnit}>min{'\n'} 
                                        {getHoursMinutes(fasting_range).seconds} sec
                                    </Text>
                                </Text>
                            ) : (
                                <Text style={Styles.rangeLabel}>
                                    {getHoursMinutes(fasting_range).seconds} 
                                    <Text style={Styles.rangeLabelUnit}> sec</Text>
                                </Text>
                            )
                        }
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

const FastingTrackerItem = ({id}: FastingTrackerItemProps) => {
    const Styles = useStyles();
    const {fastingInfo, isLoading} = useFastingTrackerItem(id);

    if(fastingInfo !== undefined && fastingInfo !== null && Object.keys(fastingInfo).length > 0 && isLoading === false) {
        return (
            <RenderTrackerHistoryItem {...fastingInfo} />
        )
    };

    return (
        <View style={Styles.skeletonContainer}>
            <View style={Styles.skeletnWrapper}>
                <SkeletonPlaceholder borderRadius={8}>
                    <SkeletonPlaceholder.Item width={Styles.skeletnWrapper.width} height={Styles.skeletonContainer.height}></SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>
        </View>
    )
}

export default FastingTrackerItem;