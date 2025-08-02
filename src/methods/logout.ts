import {CommonActions} from '@react-navigation/native';

interface NavigationProp {
    dispatch: (actions: any) => void;
}

export const _onLogout = async (navigation: NavigationProp) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                {
                    name: 'Login',
                    params: {},
                },
            ],
        })
    );
}