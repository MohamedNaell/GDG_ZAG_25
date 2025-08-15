let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i += start){
    if (i === exclude){
        continue;
    }
    console.log(`${i}`);
}

console.log("==========================");

let startOne = 10;
let endOne = 0;
let stop = 3;

for (let j = startOne; j > endOne; j--){
    if (j < startOne){
        console.log(`${endOne}${j}`)
    }else {
        console.log(`${j}`)
    }
    if(j === stop){
        break;
    }
}

console.log("==========================");
let startTwo = 1;
let endTwo = 6;
let breaker = 2;

for(let k = startTwo; k <= endTwo; k++){
    console.log(`${k}`);
    for (let l = breaker; l < endTwo; l += breaker){
        console.log(`-- ${l}`)
    }
}
