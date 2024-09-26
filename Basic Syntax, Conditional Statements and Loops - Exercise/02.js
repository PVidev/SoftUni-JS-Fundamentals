function rounding(numberToFormat, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let formatedNum = numberToFormat.toFixed(precision);
    let trimmedNum = parseFloat(formatedNum);

    console.log(trimmedNum);
}

rounding(3.1415926535897932384626433832795, 2);