//control Statements
//IF.IF-ELSE,IF-ELSE-IF,SWITCH

var game="cricket";    
let Captain="Dhoni";    //if statement
if (game=="cricket"){
    console.log("The captain of india team:",Captain) //output: the captain of india team:Dhoni
}

//if-else
let age = 18;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
//Switch

let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red.");
        break;
    default:
        console.log("Unknown fruit.");
}

//LOOPS
//for,while,do-while,foreach 
//for
/*for (let step = 0; step < 5; step++) {
    console.log("Walking east one step");
  }*/
  


for (let num = 0; num < 5; num++) {
    console.log(num);
}
//while
let Var = 0;
while (Var < 5) {
    console.log(Var);
    Var++;
}
//do while
var Rname=0;
do{
    console.log("This is priya");
    Rname++;
}while(Rname<10);
//foreach

const arr = [10, 20, 30];
arr.forEach(function(num, index) {
    console.log(index + ': ' + num);  // Outputs: 0: 10, 1: 20, 2: 30
});
//for of
const Data= [1, 2, 3, 4, 5];
for (const num of Data) {
    console.log(num);  // Outputs: 1, 2, 3, 4, 5
}

//for in
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key + ': ' + obj[key]);  // Outputs: a: 1, b: 2, c: 3
}

//Break
for (let index = 0; index < 10; index++) {
    if (index === 5) break;
    console.log(index);  // Outputs: 0, 1, 2, 3, 4
}
//continue
for (let data = 0; data < 10; data++) {
    if (data === 5) continue;
    console.log(data);  // Outputs: 0, 1, 2, 3, 4, 6, 7, 8, 9
}



