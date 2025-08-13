// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(parseInt("100000.40")); // 100000
console.log(Math.trunc(100000.999)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.max(50000, 8000, 40000, 100000)); // 100000
console.log(Number(100000.40.toFixed(0))); // 100000
console.log(Math.round(parseFloat(100000.40))); // 100000
console.log(10 ** 5); // 100000



// ===============================================


console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


// ===============================================


console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16