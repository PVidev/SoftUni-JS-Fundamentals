function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i} `.repeat(i).trim());
  }
}

printTriangle(3);