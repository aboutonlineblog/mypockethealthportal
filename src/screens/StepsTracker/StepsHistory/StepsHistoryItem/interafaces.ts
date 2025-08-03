export type StepsHistoryItemProps = {
    id: number | string;
    steps_count: number;
    created_at: Date;
    updated_at: Date;
    goal: number;
    user_id: number | string;
    day: {
        abbreviation: string;
        label: string;
        date: number;
    }
}