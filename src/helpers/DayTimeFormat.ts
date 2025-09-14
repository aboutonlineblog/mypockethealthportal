export const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getAmPm = (hour: number) => {
    let ampm;
    if (hour >= 12) {
        ampm = 'pm';
    } else {
        ampm = 'am';
    }

    return ampm;
}

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

export const DaysArray = [
    {label: "01", value: 1, name: "01"},
    {label: "02", value: 2, name: "02"},
    {label: "03", value: 3, name: "03"},
    {label: "04", value: 4, name: "04"},
    {label: "05", value: 5, name: "05"},
    {label: "06", value: 6, name: "06"},
    {label: "07", value: 7, name: "07"},
    {label: "08", value: 8, name: "08"},
    {label: "09", value: 9, name: "09"},
    {label: "10", value: 10, name: "10"},
    {label: "11", value: 11, name: "11"},
    {label: "12", value: 12, name: "12"},
    {label: "13", value: 13, name: "13"},
    {label: "14", value: 14, name: "14"},
    {label: "15", value: 15, name: "15"},
    {label: "16", value: 16, name: "16"},
    {label: "17", value: 17, name: "17"},
    {label: "18", value: 18, name: "18"},
    {label: "19", value: 19, name: "19"},
    {label: "20", value: 20, name: "20"},
    {label: "21", value: 21, name: "21"},
    {label: "22", value: 22, name: "22"},
    {label: "23", value: 23, name: "23"},
    {label: "24", value: 24, name: "24"},
    {label: "25", value: 25, name: "25"},
    {label: "26", value: 26, name: "26"},
    {label: "27", value: 27, name: "27"},
    {label: "28", value: 28, name: "28"},
    {label: "29", value: 29, name: "29"},
    {label: "30", value: 30, name: "30"},
    {label: "31", value: 31, name: "31"},
];

export const MonthsArr = [
    {label: "01", value: 1, name: "January"},
    {label: "02", value: 2, name: "February"},
    {label: "03", value: 3, name: "March"},
    {label: "04", value: 4, name: "April"},
    {label: "05", value: 5, name: "May"},
    {label: "06", value: 6, name: "June"},
    {label: "07", value: 7, name: "July"},
    {label: "08", value: 8, name: "August"},
    {label: "09", value: 9, name: "September"},
    {label: "10", value: 10, name: "October"},
    {label: "11", value: 11, name: "November"},
    {label: "12", value: 12, name: "December"},
];

export const YearArr = (startYear: number, endYear: number) => {
    const years = [];
    
    for (let year = startYear; year <= endYear; year++) {
        years.push({label: `${year}`, value: year, name: `${year}`});
    }

    return years;
}