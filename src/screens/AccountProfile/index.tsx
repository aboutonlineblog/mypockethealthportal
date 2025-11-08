import React from "react";
import {View, Text, FlatList} from "react-native";
import {useStyles} from "./index.styles";
import {ProfileSectionsProps, RenderProfileSectionProps} from "./interfaces";
import UserAvatar from "./ProfileItems/UserAvatar";
import UserStats from "./ProfileItems/UserStats";

const AccountProfile = () => {
    const Styles = useStyles();
    const sections = [
        {id: "user_avatar", component: () => <UserAvatar />},
        {id: "user_stats", component: () => <UserStats />}
    ];

    const RenderItem = React.useCallback(({item}: RenderProfileSectionProps) => {
        return item.component()
    }, [])

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