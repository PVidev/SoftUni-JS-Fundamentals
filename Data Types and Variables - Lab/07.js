function requiredReading(totalPages, pagesPerHour, days) {
    let totalTime = totalPages / pagesPerHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);
}

requiredReading(212, 20, 2);