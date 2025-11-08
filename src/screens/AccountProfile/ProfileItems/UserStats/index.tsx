import React from "react";
import {View, Text} from "react-native";
import {useStyles} from "./index.styles";

const UserStats = () => {
    const Styles = useStyles();

    return (
        <View style={Styles.container}>
            <View style={Styles.statsInnerContainer}>
                <View style={Styles.statsSection}>
                    <View style={Styles.sectionSeparatorLeft}>
                        <Text style={Styles.statsLabel}>
                            14.5<Text style={Styles.unitLabel}> CM</Text>
                        </Text>
                        <Text style={Styles.sectionLaeble}>HEIGHT</Text>
                    </View>
                </View>
                <View style={Styles.statsSection}>
                    <Text style={Styles.statsLabel}>
                        87<Text style={Styles.unitLabel}> KG</Text>
                    </Text>
                    <Text style={Styles.sectionLaeble}>WEIGHT</Text>
                </View>
                <View style={Styles.statsSection}>
                    <View style={Styles.sectionSeparatorRight}>
                        <Text style={Styles.statsLabel}>
                            37<Text style={Styles.unitLabel}> YO</Text>
                        </Text>
                        <Text style={Styles.sectionLaeble}>AGE</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default React.memo(UserStats);