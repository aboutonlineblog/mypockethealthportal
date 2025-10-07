import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            padding: 10,
            flex: 1
        },
        scrollView: {
            flex: 1
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        lastUpdateLabel: {
            fontSize: 14,
            marginBottom: 20,
            fontWeight: 'bold'
        },
        intro: {
            fontSize: 14,
            marginBottom: 10
        },
        sectionContainer: {
            marginVertical: 10
        },
        section: {
            
        },
        bullets: {
            paddingLeft: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        bullet: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "#000",
            marginRight: 10
        },
        highlight: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        normalSize: {
            fontSize: 14
        },
        bulletContainer: {
            marginBottom: 20
        },
        link: {
            color: 'blue',
            textDecorationLine: 'underline',
            fontWeight: 'bold'
        }
    })
}