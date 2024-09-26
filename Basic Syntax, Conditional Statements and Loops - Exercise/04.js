function vacation(peopleCount, groupeType, day) {
    let singlePrice = 0;

    switch (day) {
        case 'Friday':
            if (groupeType === 'Students') {
                singlePrice = 8.45;
            } else if (groupeType === 'Business') {
                singlePrice = 10.9;
            } else if (groupeType === 'Regular') {
                singlePrice = 15;
            }

            break;

        case 'Saturday':
            if (groupeType === 'Students') {
                singlePrice = 9.8;
            } else if (groupeType === 'Business') {
                singlePrice = 15.6;
            } else if (groupeType === 'Regular') {
                singlePrice = 20;
            }

            break;

        case 'Sunday':
            if (groupeType === 'Students') {
                singlePrice = 10.46;
            } else if (groupeType === 'Business') {
                singlePrice = 16;
            } else if (groupeType === 'Regular') {
                singlePrice = 22.5;
            }

            break;
    }

    let totalPrice = peopleCount * singlePrice;

    if (groupeType === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupeType === 'Business' && peopleCount >= 100) {
        totalPrice -= 10 * singlePrice;
    } else if (groupeType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30, "Students", "Sunday");