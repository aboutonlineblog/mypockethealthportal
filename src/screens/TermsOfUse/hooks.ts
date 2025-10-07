import {useNavigation, CommonActions, NavigationProp} from "@react-navigation/native";
import {TermsOfUseNavigationProps} from  "./interfaces";

export const useTermsOfService = () => {
    /** HOOKS */
    const navigation = useNavigation<NavigationProp<TermsOfUseNavigationProps>>();

    const _onGoToPrivacyPolicy = () => {
        navigation.navigate("PrivacyPolicy");
    }

    const _onContactUs = () => {
        navigation.navigate("ContactUs");
    }

    return {_onGoToPrivacyPolicy, _onContactUs};
}