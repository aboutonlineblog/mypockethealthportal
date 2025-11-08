import React from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {useStyles} from "./index.styles";
import {DropDownPickerProps, ListOfConcernsProps, PickerItemProps} from "./interafaces";
import {useDropDownPicker} from "./hooks";
import Icon from "react-native-vector-icons/FontAwesome";
import {Colors} from "@/config/theme";
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import {useGlobalStyles} from "@/config/globalStyles.styles";

const DropDownPicker = ({
    placeholder, onLeftIconClick, onRightIconClick, rightIcon, leftIcon,
    formLabel, data, onSelect
}: DropDownPickerProps) => {
    const {_onTapDrownDown, showDropDown, _onSelectConcern, selectedConcern} = useDropDownPicker();
    const Styles = useStyles();
    const GlobalStyle = useGlobalStyles();

    const RenderPickerItem = React.useCallback(({item, index}: PickerItemProps) => {
        const isLastItem = index === (data.length - 1);

        return (
            <TouchableOpacity onPress={() => {
                _onSelectConcern(item);
                if(onSelect) onSelect(item);
            }}>
                <View style={isLastItem ? Styles.pickerLastItemStyle : Styles.pickerItemStyle}>
                    <Text>{item.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }, [])

    return (
        <View>
            {formLabel && (<Text style={GlobalStyle.formLabel}>{formLabel}</Text>)}
            <View style={Styles.container}>
                {leftIcon !== undefined && (<TouchableOpacity 
                    onPress={onLeftIconClick !== undefined ? onLeftIconClick : () => {}}
                    style={Styles.iconContainer} 
                    disabled={onLeftIconClick !== undefined ? false : true}>
                    {leftIcon()}
                </TouchableOpacity>)}
                <TouchableOpacity style={Styles.inputContainer} onPress={_onTapDrownDown}>
                    <TextInput 
                        placeholder={placeholder ? placeholder : "Select an option"} 
                        style={Styles.input}
                        editable={false}
                        value={selectedConcern?.label} />
                </TouchableOpacity>
                {rightIcon !== undefined ? (<TouchableOpacity 
                    onPress={onRightIconClick !== undefined ? onRightIconClick : () => {}}
                    style={Styles.iconContainer} 
                    disabled={onRightIconClick !== undefined ? false : true}>
                    {rightIcon()}
                </TouchableOpacity>) : (
                    <TouchableOpacity 
                        onPress={_onTapDrownDown}
                        style={Styles.iconContainer}>
                        <Icon name={showDropDown === true ? "caret-up" : "caret-down"} size={25} color={Colors.text_dark_color} />
                    </TouchableOpacity>
                )}

                {showDropDown === true && (<View style={Styles.dropDownContainer}>
                    <GestureHandlerRootView>
                        <FlatList
                            data={data}
                            keyExtractor={(item: ListOfConcernsProps) => item.id}
                            renderItem={RenderPickerItem}
                        />
                    </GestureHandlerRootView>
                </View>)}
            </View>
        </View>
    )
}

export default React.memo(DropDownPicker);