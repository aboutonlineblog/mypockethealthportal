import FastingImage from "./AppListItem/assets/fasting.png";
import WalkingImage from "./AppListItem/assets/walking.png";
import MealPlanImage from "./AppListItem/assets/meal_plan.png";

export default [
    {
        id: 1,
        name: "Fasting Tracker",
        description: "",
        background: FastingImage,
        route: 'FastingTracker'
    },
    {
        id: 2,
        name: "Steps Tracker",
        description: "",
        background: WalkingImage,
        route: 'StepsTracker'
    },
    {
        id: 3,
        name: "Meal Planner",
        description: "",
        background: MealPlanImage,
        route: 'MealPlanner'
    }
]