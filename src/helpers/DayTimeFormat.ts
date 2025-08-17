export const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const dayTimeFormat = (date: Date) => {
    const dayToday = Days[new Date().getDay()];
    const getDay = Days[date.getDay()];
    const getHour = date.getHours();
    const getMinutes = date.getMinutes();
    const startedToday = dayToday === getDay ? true : false;
    let ampm;
    if (getHour >= 12) {
        ampm = 'pm';
    } else {
        ampm = 'am';
    }

    return `${startedToday ? 'Today' : getDay}, ${getHour}:${getMinutes < 10 ? `0${getMinutes}` : getMinutes} ${ampm}`
}