function solve(arg) {
    let argType = typeof(arg);

    console.log(argType);
    if (argType === 'string' || argType === 'number') {
        console.log(arg);
    } else {
        console.log('Parameter is not suitable for printing');
        
    }
}

solve('text');