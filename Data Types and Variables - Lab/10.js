function triplesOfLatinLetters(n) {
    let start = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(`${String.fromCharCode(start + i)}${String.fromCharCode(start + j)}${String.fromCharCode(start + k)}`);
            }
        }
    }
}

triplesOfLatinLetters(3);