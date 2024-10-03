 //Hoisting 
 //Hoisting with Var

 console.log(myVariable); // Outputs: undefined
var myVariable = 'Hello';
// After declaration
console.log(myVariable); // Outputs: Hello

//Hoisting with let

//console.log(letVariable); // Throws ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = 'Welcome';

// This will run fine after declaration
letVariable = 'World';
console.log(letVariable); // Outputs: World

//Hoisting with const

//console.log(ConstVariable); // Throws ReferenceError: Cannot access 'ConstVariable' before initialization
const ConstVariable = 'Hii...';
console.log(ConstVariable)
// This will run fine after declaration
//ConstVariable = 'World'; // Throws TypeError: Assignment to constant variable.

//Hoisting with Function Declaration

sayWelcome(); // Outputs: "Who Are You!"

function sayWelcome() {
  console.log("Who Are You!");
}

//Hoisting with Function Expression
console.log(myFunction); // Outputs: undefined
//myFunction(); // Throws TypeError: myFunc is not a function

var myFunction = function() {
  console.log('Hoisting with function expression!');
};



