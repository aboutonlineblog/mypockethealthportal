import React from "react";
import {View, TouchableOpacity, FlatList} from "react-native";
import {useStyles} from "./index.styles";
import {ProfileSectionsProps, RenderProfileSectionProps} from "./interfaces";
import UserAvatar from "./ProfileItems/UserAvatar";
import UserStats from "./ProfileItems/UserStats";

import {useAccountProfile} from "./hooks";

const AccountProfile = () => {
    const Styles = useStyles();
    const hooks = useAccountProfile(Styles);
    const sections = [
        {id: "user_avatar", component: () => <UserAvatar 
            edit={false} 
            avatar={hooks?.userInfo?.avatar} 
            fullname={hooks?.userInfo?.full_name}
        />},
        {id: "user_stats", component: () => <UserStats 
            height={hooks?.userInfo?.height}
            heightType={hooks?.userInfo?.height_unit_type}
            weight={hooks?.userInfo?.weight}
            weightType={hooks?.userInfo?.weight_unit_type}
            age={hooks?.userInfo?.age}
        />}
    ];

    const RenderItem = React.useCallback(({item}: RenderProfileSectionProps) => {
        return item.component()
    }, [hooks.userInfo])

    return (
        <View style={Styles.container}>
            <FlatList
                data={sections}
                keyExtractor={(item: ProfileSectionsProps) => item.id}
                renderItem={RenderItem}
            />
        </View>
    )
}

export default AccountProfile;