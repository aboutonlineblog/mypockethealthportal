import React from "react";
import {useNavigation, NavigationProp} from "@react-navigation/native";
import {UpdateProfileNavProps} from "./interfaces";
import {TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Colors} from "@/config/theme";
import {useQuery} from "@tanstack/react-query";
import {getUserInfo} from "@/api/user";
import {getState} from "@/helpers/GlobalState";

export const useAccountProfile = (Styles: any) => {
    const navigation = useNavigation<NavigationProp<UpdateProfileNavProps>>();
    const currentUserId = getState("currentLoginUser", "id");
    const {data: userInfo} = useQuery({
        queryKey: [`CURRENT_LOGIN_USER_${currentUserId}`, {id: currentUserId}],
        queryFn: getUserInfo,
        staleTime: Infinity,
        gcTime: Infinity,
    });

    const _onGoToUpdateProfile = () => {
        navigation.navigate("EditProfile");
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity style={Styles.headerRightBtn} onPress={_onGoToUpdateProfile}>
                        <FontAwesome5 name="user-edit" size={Styles.headerRightBtn.width * 0.7} color={Colors.text_dark_color} />
                    </TouchableOpacity>
                )
            }
        })
    })

    return {_onGoToUpdateProfile, userInfo}
}