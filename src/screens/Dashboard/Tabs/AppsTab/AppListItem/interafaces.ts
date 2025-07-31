import {ImageBackgroundProps} from "react-native";

export type AppListItemNavigation = {
    FastingTracker: {} | undefined;
    StepsTracker: {} | undefined;
    MealPlanner: {} | undefined;
};

export interface AppListItemProps {
    id: string | number;
    name: string;
    background: ImageBackgroundProps;
    route: string;
    description: string;
    isLastItem?: boolean;
    index?: number;
}