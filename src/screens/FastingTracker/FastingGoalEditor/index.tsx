import React from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {useStyles} from "./index.styles";
import {useFastingEditor} from "./hooks";
import {FastinGoalEditorProps} from "./interafaces";

const FastingGoalEditor = ({setGoalTimeType, setGoal, onClose}: FastinGoalEditorProps) => {
    const Styles = useStyles();
    const {
        editPayload, _onEditGoal, _onSaveChanges, _onUpdateGoalValue,
        day, hour, minute, _onSaveFastingGoal, setSelectedOption,
        selectedOption, editEnabled, setEditStatus
    } = useFastingEditor({setGoalTimeType, setGoal, onClose});

    return (
        <View style={Styles.container}>
            <View style={Styles.headerContainer}>
                <Text style={Styles.headerTitle}>Set your fasting goal</Text>
            </View>

            <View style={Styles.timeTypeOption}>
                <Text style={Styles.timeTypeOptionLabel}>Select time type</Text>
                <View style={Styles.timeTypeSelectionBtnContainer}>
                    <TouchableOpacity style={selectedOption === 'hour' ? Styles.timeTypeSelectionSelected : Styles.timeTypeSelectionUnSelected} onPress={() => setSelectedOption("hour")}>
                        <View style={Styles.radioButton}>
                            {selectedOption === 'hour' && (<View style={Styles.radioBullet} />)}
                        </View>
                        <Text style={Styles.radioButtonLabel}>Hour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={selectedOption === 'minute' ? Styles.timeTypeSelectionSelected : Styles.timeTypeSelectionUnSelected} onPress={() => setSelectedOption("minute")}>
                        <View style={Styles.radioButton}>
                            {selectedOption === 'minute' && (<View style={Styles.radioBullet} />)}
                        </View>
                        <Text>Minute</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.editorContainer}>
                <View style={Styles.inputContainer}>
                    {/* <TouchableOpacity onPress={() => _onEditGoal("day")} style={Styles.inputWrapper}>
                        {editPayload === "day" ? (
                            <View style={Styles.inputWrapper}>
                                <Text style={Styles.indicator}>DAY</Text>
                                <TextInput 
                                    maxLength={2}
                                    autoFocus={true}
                                    style={Styles.inputGoalStyle} 
                                    textAlign={"center"} 
                                    keyboardType="number-pad"
                                    value={day}
                                    onChangeText={(v: string) => _onUpdateGoalValue("day", v)} />
                            </View>
                        ) : (<View style={Styles.inputWrapper}>
                            <Text style={Styles.goalInputValue}>
                                <Text style={Styles.indicator}>DAY{"\n"}</Text>{day ? day.padStart(2, "0") : "00"}</Text>
                        </View>)}
                    </TouchableOpacity> */}

                    {/* <View style={Styles.timeSeparator}>
                        <Text style={Styles.timeSeparatorLabel}>:</Text>
                    </View> */}

                    {selectedOption === 'hour' && (<TouchableOpacity onPress={() => _onEditGoal("hour")} style={Styles.inputWrapper}>
                        {editEnabled === true ? (
                            <View style={Styles.inputWrapper}>
                                <Text style={Styles.indicator}>HOUR</Text>
                                <TextInput 
                                    maxLength={2}
                                    autoFocus={true}
                                    style={Styles.inputGoalStyle} 
                                    textAlign={"center"} 
                                    keyboardType="number-pad"
                                    value={hour}
                                    onChangeText={(v: string) => _onUpdateGoalValue("hour", v)} />
                            </View>
                        ) : (<View style={Styles.inputWrapper}>
                            <Text style={Styles.goalInputValue}>
                                <Text style={Styles.indicator}>HOUR{"\n"}</Text>{hour ? hour.padStart(2, "0") : "00"}</Text>
                        </View>)}
                    </TouchableOpacity>)}

                    {/* <View style={Styles.timeSeparator}>
                        <Text style={Styles.timeSeparatorLabel}>:</Text>
                    </View> */}

                    {selectedOption === 'minute' && (<TouchableOpacity onPress={() => _onEditGoal("minute")} style={Styles.inputWrapper}>
                        {editEnabled === true ? (
                            <View style={Styles.inputWrapper}>
                                <Text style={Styles.indicator}>MINUTES</Text>
                                <TextInput 
                                    maxLength={2}
                                    autoFocus={true}
                                    style={Styles.inputGoalStyle} 
                                    textAlign={"center"} 
                                    keyboardType="number-pad"
                                    value={minute}
                                    onChangeText={(v: string) => _onUpdateGoalValue("minute", v)} />
                            </View>
                        ) : (<View style={Styles.inputWrapper}>
                            <Text style={Styles.goalInputValue}>
                                <Text style={Styles.indicator}>MINUTES{"\n"}</Text>{minute ? minute.padStart(2, "0") : "00"}</Text>
                        </View>)}
                    </TouchableOpacity>)}
                </View>

                <TouchableOpacity style={Styles.saveButton} onPress={editEnabled === true ? _onSaveChanges : _onSaveFastingGoal}>
                    {editPayload === null ? (<Text style={Styles.saveBtnLabel}>Set Fasting Goal</Text>) : (
                        <Text style={Styles.saveBtnLabel}>Save Changes</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default React.memo(FastingGoalEditor);