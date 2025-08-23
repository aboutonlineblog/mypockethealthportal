export interface FastingTrackerHistoryRenderItem {
    id: string | number;
    start_time: number;
    end_time: number | null;
    fasting_range: number;
    fasting_range_time_unit: string;
    status: string;
    created_at: number;
    updated_at: number | null;
    goal: {
        time_value: number;
        time_type: string;
        time_int: number;
    }
};

export interface FastingTrackerHistoryRenderItemProps {
    item: FastingTrackerHistoryRenderItem
};