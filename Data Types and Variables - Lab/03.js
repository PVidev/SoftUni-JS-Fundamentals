function solve(str1, replacement, str2) {
    let replacedStr = str1.replace('_', replacement);
    let outputTern = (replacedStr === str2) ? "Matched" : "Not Matched"; //Ternary operation
    console.log(outputTern);
}

solve('Str_ng', 'I', 'Strong');