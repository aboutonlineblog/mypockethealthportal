import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useStyles} from "./index.styles";
import {useGlobalStyles} from "@/config/globalStyles.styles";
import {StepsHistoryItemProps} from "./interafaces";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

const StepsTrackerHistoryItem = ({id, steps_count, day}: StepsHistoryItemProps) => {
    const Styles = useStyles();
    const GlobalStyle = useGlobalStyles();

    return (
        <View style={Styles.container}>
            <View style={Styles.dayLabelContainer}>
                <View style={Styles.dayLabelWrapper}>
                    <Text style={Styles.dateLabel}>{day?.date}</Text>
                    <Text style={Styles.dateLabelAbbre}>{day?.abbreviation}</Text>
                </View>
            </View>

            {/** STEP DETAILS */}
            <View style={Styles.stepsDetailsContainer}>
                <View style={Styles.stepsDetailsSection}>
                    <Text style={[Styles.stepsDetailsSectionLabel, GlobalStyle.mRightSpace20]}><Icon name="footsteps" /> Steps: {steps_count}</Text>
                    <Text style={[Styles.stepsDetailsSectionLabel, GlobalStyle.mLeftSpace20]}><Icon2 name="flag-checkered" /> Goal: 6000</Text>
                </View>
                <View style={Styles.stepsDetailsSection}>
                    <View style={Styles.progressContainer}>
                        <View style={Styles.progressBar} />
                    </View>
                </View>
                <View style={Styles.stepsDetailsSection}>
                    <TouchableOpacity style={Styles.stepsActionButton}>
                        <Icon name="share-social" size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default React.memo(StepsTrackerHistoryItem);