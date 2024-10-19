function numbers(inputData) {
    let sequenceString = inputData[0].split(' ').map(Number);

    for (let commandIndex = 1; commandIndex < inputData.length; commandIndex++) {
        let currentCommand = inputData[commandIndex].split(' ');
        let operation = currentCommand[0];

        if (operation === "Add") {
            let addValue = Number(currentCommand[1]);
            sequenceString.push(addValue);
        } else if (operation === "Remove") {
            let removeValue = Number(currentCommand[1]);
            let removeIndex = sequenceString.indexOf(removeValue);

            if (removeIndex !== -1) {
                sequenceString.splice(removeIndex, 1);
            }

        } else if (operation === "Replace") {
            let targetValue = Number(currentCommand[1]);
            let newValue = Number(currentCommand[2]);
            let replaceIndex = sequenceString.indexOf(targetValue);

            if (replaceIndex !== -1) {
                sequenceString[replaceIndex] = newValue;
            }

        } else if (operation === "Collapse") {
            let collapseValue = Number(currentCommand[1]);
            sequenceString = sequenceString.filter(num => num >= collapseValue);
        } else if (operation === "Finish") {
            console.log(sequenceString.join(' '));
        }
    }
}

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
// numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
