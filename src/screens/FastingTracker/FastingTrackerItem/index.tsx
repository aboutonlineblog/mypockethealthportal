import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";

const FastingTrackerItem = () => {
    const Styles = useStyles();

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
                        <Text style={Styles.timeStamp}>8:00 am</Text>
                        <Text style={Styles.dayDateStamp}>August 7, 2025</Text>
                    </View>
                </View>
                <View style={Styles.timeStampWrapper}>
                    <View style={[Styles.displayTimeContainer, Styles.endTimeContainer]}>
                        <Text style={Styles.timeTitleLabel}>END TIME</Text>
                        <Text style={Styles.timeStamp}>1:00 pm</Text>
                        <Text style={Styles.dayDateStamp}>August 7, 2025</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FastingTrackerItem;