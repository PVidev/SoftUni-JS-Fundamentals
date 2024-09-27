function getNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);

    date.setDate(date.getDate() + 1);

    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth() + 1;
    let nextDay = date.getDate();

    return `${nextYear}-${nextMonth}-${nextDay}`;
}

console.log(getNextDay(2016, 9, 30));
