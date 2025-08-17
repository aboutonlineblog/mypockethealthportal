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

export const timePluralSingular = (timeTypeLabel: string | null, value: number) => {
    if(!timeTypeLabel) {
        return '';
    }

    if(timeTypeLabel === 'second' && value > 1) {
        return 'seconds';
    }

    if(timeTypeLabel === 'hour' && value > 1) {
        return 'hours';
    }

    if(timeTypeLabel === 'minute' && value > 1) {
        return 'minutes';
    }

    if(timeTypeLabel === 'day' && value > 1) {
        return 'days';
    }

    return timeTypeLabel;
}

export const getTotalSeconds = (timeTypeLabel: string | null, value: number) => {
    if(!timeTypeLabel || !value) {
        return 0;
    }

    if(timeTypeLabel === 'hour') {
        return (value * 60) * 60;
    }

    if(timeTypeLabel === 'minute') {
        return value * 60;
    }

    if(timeTypeLabel === 'day') {
        return ((value * 60) * 60) * 24
    }

    return 60;
}