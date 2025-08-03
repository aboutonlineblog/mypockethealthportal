import React from "react";
import {View} from "react-native";
import {useStyles} from "./index.styles";

import StepsTrackerCounter from "./Counter";
import StepsTrackerHistory from "./StepsHistory";

const StepsTracker = () => {
    const Styles = useStyles();

    return (
        <View style={Styles.container}>
            <StepsTrackerCounter />
            <StepsTrackerHistory />
        </View>
    )
}

export default StepsTracker;