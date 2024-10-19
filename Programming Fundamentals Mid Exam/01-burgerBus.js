function burgerBus(input) {
    let totalProfit = 0;
    let cityCount = Number(input[0]);

    for (let i = 1; i <= cityCount; i++) {
        let cityName = input[i * 3 - 2];
        let income = Number(input[i * 3 - 1]);
        let expenses = Number(input[i * 3]);

        if (i % 5 === 0) {
            income *= 0.90;
        } else if (i % 3 === 0) {
            expenses *= 1.50;
        }

        let profit = income - expenses;
        totalProfit += profit;

        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"]);