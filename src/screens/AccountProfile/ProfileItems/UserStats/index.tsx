import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";
import {UserStatsProps} from "./interafaces";

const UserStats = ({
    height = 0,
    weight = 0,
    age = 0,
    heightType = '',
    weightType = '',
}: UserStatsProps) => {
    const Styles = useStyles();

    return (
        <View style={Styles.container}>
            <View style={Styles.statsInnerContainer}>
                <View style={Styles.statsSection}>
                    <View style={Styles.sectionSeparatorLeft}>
                        <Text style={Styles.statsLabel}>
                            {height}<Text style={Styles.unitLabel}> {heightType?.toUpperCase()}</Text>
                        </Text>
                        <Text style={Styles.sectionLaeble}>HEIGHT</Text>
                    </View>
                </View>
                <View style={Styles.statsSection}>
                    <Text style={Styles.statsLabel}>
                        {weight}<Text style={Styles.unitLabel}> {weightType?.toUpperCase()}</Text>
                    </Text>
                    <Text style={Styles.sectionLaeble}>WEIGHT</Text>
                </View>
                <View style={Styles.statsSection}>
                    <View style={Styles.sectionSeparatorRight}>
                        <Text style={Styles.statsLabel}>
                            {age}<Text style={Styles.unitLabel}> YO</Text>
                        </Text>
                        <Text style={Styles.sectionLaeble}>AGE</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default React.memo(UserStats);