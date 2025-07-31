import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AppListItemNavigation} from "./interafaces";

export const useAppListItemHooks = () => {
    const navigation = useNavigation<NavigationProp<AppListItemNavigation>>();

    const _onPressItem = (route: string) => {
        if(route === 'FastingTracker') {
            navigation.navigate("FastingTracker")
        }
        if(route === 'StepsTracker') {
            navigation.navigate("StepsTracker")
        }
        if(route === 'MealPlanner') {
            navigation.navigate("MealPlanner")
        }
    }

    return {_onPressItem}
}