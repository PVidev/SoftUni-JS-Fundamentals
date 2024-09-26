function printAndSum(start, end) {
    let sum = 0;
    let allNums = '';

    for (let currentNum = start; currentNum <= end; currentNum++) {
        sum += currentNum;
        allNums += currentNum + ' ';
    }

    console.log(allNums);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);