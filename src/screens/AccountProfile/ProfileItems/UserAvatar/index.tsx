import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {useStyles} from "./index.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Colors} from "@/config/theme";
import SampleAvatar from "./assets/avatar.png";
import {useUserAvatar} from "./hooks";

const UserAvatar = () => {
    const Styles = useStyles();
    const {_onGoToUpdateProfile} = useUserAvatar();

    return (
        <View style={Styles.container}>
            <View>
                <View style={Styles.avatarWrapper}>
                    <Image source={SampleAvatar} resizeMode="cover" style={Styles.avatar} />
                </View>
                <TouchableOpacity 
                    style={Styles.updateProfileBtn} 
                    activeOpacity={1}
                    onPress={_onGoToUpdateProfile}>
                    <Icon name="edit-document" size={Styles.updateProfileBtn.width * 0.6} color={Colors.light_color} />
                </TouchableOpacity>
            </View>
            <Text style={Styles.name}>Neil Anthony Te</Text>
        </View>
    )
}

export default React.memo(UserAvatar);