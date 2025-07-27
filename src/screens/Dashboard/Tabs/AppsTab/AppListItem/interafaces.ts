import {ImageBackgroundProps} from "react-native";

export interface AppListItemProps {
    id: string | number;
    name: string;
    description: string;
    isLastItem?: boolean;
    index?: number;
    background: ImageBackgroundProps;
}