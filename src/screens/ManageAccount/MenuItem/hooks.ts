import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MenuRenderItemNavigation} from "./interafaces";
import {_onLogout} from "@/methods/logout";

export const useMenuItemHooks = () => {
    const navigation = useNavigation<NavigationProp<MenuRenderItemNavigation>>();

    const _onPressMenuItem = async (route: string | null) => {
        if(route !== null) {
            if(route === 'DeleteAccount') {
                await _onLogout(navigation);
                return;
            }
        }
    }

    return {_onPressMenuItem}
}