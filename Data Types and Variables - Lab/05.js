function solve(num) {
    let tempNum = +num;

    let sum = 0;
    while (tempNum > 0) { // While there are digits to take
        sum += tempNum % 10; // Always returns the last digit
        tempNum = Math.floor(tempNum / 10); // Always remove the last digit
    }

    let isAmazing = (sum.toString().includes('9')) ? "True" : "False";
    console.log(`${num} Amazing? ${isAmazing}`);
}

solve(1233);