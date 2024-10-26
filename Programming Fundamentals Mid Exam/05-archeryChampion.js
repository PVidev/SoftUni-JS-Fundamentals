function archeryChampion([targetsData, ...commands]) {
    let targets = targetsData.split('|').map(Number);
    let points = 0;

    for (let command of commands) {
        if (command === "Game over") {
            break;
        }

        let [action, startIndex, length] = command.split(/[@]/);

        if (action === "Shoot Left") {
            startIndex = Number(startIndex);
            length = Number(length);
            if (startIndex >= 0 && startIndex < targets.length) {
                let newIndex = (startIndex - length % targets.length + targets.length) % targets.length;
                points += Math.min(5, targets[newIndex]);
                targets[newIndex] = Math.max(0, targets[newIndex] - 5);
            }

        } else if (action === "Shoot Right") {
            startIndex = Number(startIndex);
            length = Number(length);
            if (startIndex >= 0 && startIndex < targets.length) {
                let newIndex = (startIndex + length) % targets.length;
                points += Math.min(5, targets[newIndex]);
                targets[newIndex] = Math.max(0, targets[newIndex] - 5);
            }

        } else if (action === "Reverse") {
            targets.reverse();
        }
    }

    console.log(targets.join(' - '));
    console.log(`John finished the archery tournament with ${points} points!`);
}

archeryChampion(["10|10|10|10|10", "Shoot Left@0@2", "Shoot Right@4@5", "Shoot Right@6@5", "Reverse", "Game over"]);