//value & reference types
//value type

let a = 10;
let b = a; // b is a copy of a
b = 20;
console.log(a); // 10

//reference type

let name1 = { name: "ROJA" };
let name2 = name1; // name2 references the same object
name2.name = "ROJAPRIYA";
console.log(name1.name); // ROJAPRIYA
