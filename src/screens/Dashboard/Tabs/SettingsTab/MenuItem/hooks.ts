import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MenuRenderItemNavigation} from "./interafaces";
import {_onLogout} from "@/methods/logout";

export const useMenuItemHooks = () => {
    const navigation = useNavigation<NavigationProp<MenuRenderItemNavigation>>();

    const _onPressMenuItem = async (route: string | null) => {
        if(route !== null) {
            if(route === 'logout') {
                await _onLogout(navigation);
                return;
            }

            if(route === 'AccountProfile') {
                navigation.navigate("AccountProfile")
            }
            if(route === 'ContactUs') {
                navigation.navigate("ContactUs")
            }
            if(route === 'TermsOfUse') {
                navigation.navigate("TermsOfUse")
            }
            if(route === 'PrivacyPolicy') {
                navigation.navigate("PrivacyPolicy")
            }
        }
    }

    return {_onPressMenuItem}
}