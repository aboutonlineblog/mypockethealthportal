import {useNavigation, CommonActions, NavigationProp} from "@react-navigation/native";
import {PrivacyPolicyNavigationProps} from  "./interfaces";

export const usePrivacyPolicy = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<PrivacyPolicyNavigationProps>>();

    const _onContactUs = () => {
        navigation.navigate("ContactUs");
    }

    return {_onContactUs};
}