let num = 110;

if (num < 10){
    console.log(`${"00"}${num}`);
} else if(num > 10 && num < 100){
    console.log(`${0}${num}`)
} else{
    console.log(num);
}

console.log("=====================================");

let num10 = 9;
let str = "9";
let str2 = "20";

if (num10 == str){
    console.log("{num1} Is The Same Value As {str}");
}
if (num10 !== str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num10 !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

console.log("=====================================");

let num7 = 10;
let num8 = 30;
let num9 = "30";

if ((num9 > num7 && num9 !== num8) && (num9 > num7 && num9 == num8 && num9 !== num8) && (num9 !== num7 && num9 !== num8)){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number" +
    "\n" + "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
    "\n" +"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}
