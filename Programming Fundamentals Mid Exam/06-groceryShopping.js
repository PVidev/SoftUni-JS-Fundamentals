function groceryShopping([initialList, ...commands]) {
    let products = initialList.split('|');  // Превръщаме първоначалния списък от продукти в масив

    for (let command of commands) {
        if (command === "Shop!") {
            break;
        }

        let [action, product, secondProduct] = command.split('%');

        if (action === "Important") {
            if (products.includes(product)) {
                products.splice(products.indexOf(product), 1);
            }
            products.unshift(product);

        } else if (action === "Add") {
            if (products.includes(product)) {
                console.log("The product is already in the list.");
            } else {
                products.push(product);
            }

        } else if (action === "Swap") {
            if (products.includes(product) && products.includes(secondProduct)) {
                let index1 = products.indexOf(product);
                let index2 = products.indexOf(secondProduct);
                [products[index1], products[index2]] = [products[index2], products[index1]];
            } else {
                console.log(`Product ${!products.includes(product) ? product : secondProduct} missing!`);
            }

        } else if (action === "Remove") {
            if (products.includes(product)) {
                products.splice(products.indexOf(product), 1);
            } else {
                console.log(`Product ${product} isn't in the list.`);
            }

        } else if (action === "Reversed") {
            products.reverse();
        }
    }

    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product}`);
    });
}

groceryShopping(["eggs|milk|bread|fish", "Important%bread", "Swap%eggs%tomato", "Shop!"]);