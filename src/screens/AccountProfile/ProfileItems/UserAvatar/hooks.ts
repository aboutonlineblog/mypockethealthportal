import {useNavigation, NavigationProp} from "@react-navigation/native";
import {UpdateProfileNavProps} from "./interafaces";

export const useUserAvatar = () => {
    const navigation = useNavigation<NavigationProp<UpdateProfileNavProps>>();
    const _onGoToUpdateProfile = () => {
        navigation.navigate("EditProfile");
    }

    return {_onGoToUpdateProfile}
}