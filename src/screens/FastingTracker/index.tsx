import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useStyles} from "./index.styles";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import PieChart from 'react-native-pie-chart/v3api'
import {Colors} from "@/config/theme";
import Icon from 'react-native-vector-icons/Ionicons';
import {useFastingTrackerHooks} from "./hooks";

const FastingTracker = () => {
    const Styles = useStyles();
    const {_onStartFasting, startFasting} = useFastingTrackerHooks();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles.container} edges={["bottom"]}>
                <View style={Styles.container}>
                    <View style={Styles.actionsContainer}></View>
                    <View style={Styles.counterContainer}>
                        <View style={Styles.counterWrapper}>
                            <PieChart 
                            widthAndHeight={Styles.counterContainer.width * 0.85} 
                            series={[70, 30]} 
                            sliceColor={[Colors.tab_active_color, Colors.border_color]}
                            coverRadius={0.7} />

                            <Text style={Styles.timerLabel}>
                                <Text style={Styles.timeElapsedLabel}>{`elapsed time (80%)`}</Text>{'\n'}
                                00 : 00 : 00
                                {'\n'}<Text style={[Styles.timeElapsedLabel, Styles.goalLabel]}>{`GOAL: 16 HOURS`}</Text>
                            </Text>
                        </View>

                        <TouchableOpacity style={startFasting ? Styles.stopBtn : Styles.startBtn} onPress={_onStartFasting}>
                            <Text style={Styles.startBtnLabel}>{startFasting ? "Stop Fasting" : "Start Fasting"}</Text>
                        </TouchableOpacity>

                        <View style={Styles.timeStampContainer}>
                            <View style={Styles.timeStapContainerSections}>
                                <Text style={Styles.timeStampLabel}>Fasting Started</Text>
                                <Text style={[Styles.timeStampLabel, Styles.timeLabel]}>Today, 6:00 am</Text>
                            </View>
                            <View style={[Styles.timeStapContainerSections, Styles.centerSpace]}></View>
                            <View style={Styles.timeStapContainerSections}>
                                <Text style={Styles.timeStampLabel}>Fasting Goal</Text>
                                <Text style={[Styles.timeStampLabel, Styles.timeLabel]}>Friday, 9:00 pm</Text>
                            </View>
                        </View>

                        <View style={Styles.actionBtnsContainer}>
                            <View style={Styles.bgDecor} />
                            <View style={Styles.actionBtns}>
                                <TouchableOpacity style={Styles.actBtn} activeOpacity={1}>
                                    <Icon name="newspaper-sharp" size={Styles.actBtn.width * 0.5} color={Colors.tab_active_color} />
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.actionBtns}>
                                <TouchableOpacity style={Styles.actBtn} activeOpacity={1}>
                                    <Icon name="stats-chart" size={Styles.actBtn.width * 0.5} color={Colors.tab_active_color} />
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.actionBtns}>
                                <TouchableOpacity style={Styles.actBtn} activeOpacity={1}>
                                    <Icon name="pencil" size={Styles.actBtn.width * 0.5} color={Colors.tab_active_color} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[Styles.actionsContainer, Styles.flexCenterTop]}></View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default FastingTracker;