export const fasting = [
    {
        id: 0,
        start_time: new Date().setHours(new Date().getHours() - 10),
        end_time: new Date().setHours(new Date().getHours() - 5),
        fasting_range: 5,
        status: 'ended', // this can be started or ended
        created_at: new Date().setHours(new Date().getHours() - 10),
        updated_at: new Date().setHours(new Date().getHours() - 5),
        goal: {
            time_value: 16,
            time_type: 'hour',
            time_int: new Date().setHours(new Date().getHours() - 16) // this is time in milliseconds
        }
    },
    {
        id: 1,
        start_time: new Date().setHours(new Date().getHours() - 10),
        end_time: new Date().setHours(new Date().getHours() - 5),
        fasting_range: 5,
        status: 'ended', // this can be started or ended
        created_at: new Date().setHours(new Date().getHours() - 10),
        updated_at: new Date().setHours(new Date().getHours() - 5),
        goal: {
            time_value: 16,
            time_type: 'hour',
            time_int: new Date().setHours(new Date().getHours() - 16) // this is time in milliseconds
        }
    },
]