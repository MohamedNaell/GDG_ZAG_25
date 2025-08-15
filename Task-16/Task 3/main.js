function sayHello(theName, theGender = "") {

    if(theGender === "Male"){
        theGender = "Mr";
    }else if(theGender === "Female"){
        theGender = "Miss";
    }
    document.write(`<p>"Hello ${theGender} ${theName}"</p>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("==========================");

function calculate(firstNum, secondNum, operation) {

    if(secondNum === undefined && operation === undefined){
        console.log(firstNum);
    }else if(operation === undefined){
        console.log(firstNum + secondNum);
    }else if(operation === "add"){
        console.log(firstNum + secondNum);
    }else if(operation === "subtract"){
        console.log(firstNum - secondNum);
    }else if(operation === "multiply"){
        console.log(firstNum * secondNum);
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log("==========================");

function ageInTime(theAge) {

    if(theAge > 100 || theAge < 10){
        console.log("Age Out Of Range");
    }else{
        console.log(`The Age With years Is ${theAge}`)
        console.log(`The Age With Months Is ${theAge * 12}`);
        console.log(`The Age With Weeks Is ${theAge * 12 * 4}`);
        console.log(`The Age With Days Is ${theAge * 12 * 4 * 7}`);
        console.log(`The Age With Hours Is ${theAge * 12 * 4 * 7 * 24}`);
        console.log(`The Age With Minutes Is ${theAge * 12 * 4 * 7 * 24 * 60}`);
        console.log(`The Age With Seconds Is ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
    }
}

// Needed Output
ageInTime(9); // Age Out Of Range
ageInTime(80); // Months Example => 456 Months
