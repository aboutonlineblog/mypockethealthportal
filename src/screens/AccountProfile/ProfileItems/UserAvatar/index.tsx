import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {useStyles, randomBGColor} from "./index.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Colors} from "@/config/theme";
import SampleAvatar from "./assets/avatar.png";
import {useUserAvatar} from "./hooks";
import {UserAvatarProps} from "./interafaces";

const UserAvatar = ({edit = false, avatar = {
    string_value: 'N',
    color: '#0b3144ff'
}, fullname = ''}: UserAvatarProps) => {
    const Styles = useStyles();
    const {_onGoToUpdateProfile} = useUserAvatar();

    return (
        <View style={Styles.container}>
            <View>
                <View style={typeof avatar === 'object' ? [Styles.avatarWrapper, randomBGColor(avatar?.color)] : Styles.avatarWrapper}>
                    {
                        typeof avatar === 'string' ? (
                            <Image source={SampleAvatar} resizeMode="cover" style={Styles.avatar} />
                        ) : typeof avatar === 'object' ? (
                            <Text style={Styles.avatarChar}>{avatar?.string_value}</Text>
                        ) : null
                    }
                </View>
                {edit === true && (<TouchableOpacity 
                    style={Styles.updateProfileBtn} 
                    activeOpacity={1}
                    onPress={_onGoToUpdateProfile}>
                    <Icon name="edit-document" size={Styles.updateProfileBtn.width * 0.6} color={Colors.light_color} />
                </TouchableOpacity>)}
            </View>
            {edit === false && (<Text style={Styles.name}>{fullname}</Text>)}
        </View>
    )
}

export default React.memo(UserAvatar);