import React from "react";
import {View, Modal, TouchableWithoutFeedback} from "react-native";
import {AppModalProps} from "./interafaces";
import {useStyles} from "./index.styles";

const AppModal = ({show, children, onClose}: AppModalProps) => {
    const Styles = useStyles();

    return (
        <Modal
            visible={show}
            transparent={true}
            onRequestClose={() => {
                if(onClose) onClose();
            }}
            animationType="fade"
        >
            <TouchableWithoutFeedback onPress={() => {
                if(onClose) onClose();
            }}>
                <View style={Styles.container}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default React.memo(AppModal);