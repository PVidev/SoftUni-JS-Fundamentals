function giftBoxCoverage([sideSize, paperCount, ...paperData]) {
    sideSize = +sideSize;
    paperCount = +paperCount;
    let boxArea = sideSize * sideSize * 6;

    let coveredArea = 0;

    for (let i = 0; i < paperCount; i++) {
        let length = +paperData[i * 2];
        let width = +paperData[i * 2 + 1];
        let sheetArea = length * width;

        if ((i + 1) % 5 === 0) {
            continue;
        } else if ((i + 1) % 3 === 0) {
            sheetArea *= 0.75;
        }

        coveredArea += sheetArea;
    }

    if (coveredArea >= boxArea) {
        let extraCoverage = ((coveredArea - boxArea) / coveredArea) * 100;
        console.log(`You've covered the gift box!\n${extraCoverage.toFixed(2)}% wrap paper left.`);
    } else {
        let uncoveredPercentage = ((boxArea - coveredArea) / boxArea) * 100;
        console.log(`You are out of paper!\n${uncoveredPercentage.toFixed(2)}% of the box is not covered.`);
    }
}

giftBoxCoverage(["10", "5", "3", "0.5", "2.4", "5", "3.7", "1", "3", "34.7", "5", "80"]);
