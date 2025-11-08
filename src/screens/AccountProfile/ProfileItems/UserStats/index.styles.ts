import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "@/config/theme";
import {useGlobalStyles} from "@/config/globalStyles.styles";

const {height, width} = Dimensions.get("window");

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            width,
            height: width / 5,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        },
        statsInnerContainer: {
            width: width * 0.9,
            height: width / 5,
            backgroundColor: Colors.button_color_normal,
            borderRadius: 10,
            flexDirection: "row",
            overflow: "hidden"
        },
        statsSection: {
            width: (width * 0.9) / 3,
            justifyContent: "center",
            alignItems: "center",
        },
        statsLabel: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
            color: Colors.text_light_color
        },
        unitLabel: {
            fontSize: 14,
            color: Colors.text_light_color
        },
        sectionLaeble: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 14,
            color: Colors.text_light_color
        },
        sectionSeparatorLeft: {
            borderRightWidth: 1,
            borderColor: Colors.text_light_color,
            width: "100%"
        },
        sectionSeparatorRight: {
            borderLeftWidth: 1,
            borderColor: Colors.text_light_color,
            width: "100%"
        }
    })
}