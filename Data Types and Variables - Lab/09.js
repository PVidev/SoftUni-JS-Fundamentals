function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let num = i;
        let sumOfDigits = 0;

        while (num > 0) {
            sumOfDigits += num % 10;
            num = Math.floor(num / 10);
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);