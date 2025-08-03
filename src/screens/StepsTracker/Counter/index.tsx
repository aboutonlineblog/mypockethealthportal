import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";

const StepsTrackerCounter = () => {
    const Styles = useStyles();

    return (
        <View style={Styles.container}>
            <View style={Styles.dailyGoalLabel}>
                <Text style={Styles.stepsLabel}>Daily Goal: 6000</Text>
            </View>

            <View>
                <Text style={Styles.stepsLabel}>TODAY</Text>
                <Text style={[Styles.stepsLabel, Styles.counter]}>8000</Text>
                <Text style={Styles.stepsLabel}>Steps</Text>
            </View>
        </View>
    )
}

export default StepsTrackerCounter;