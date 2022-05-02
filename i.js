//ARRAYS

console.log("working");
//method1 :- Creating and assigning values to an array
let names = ["smily","salma","teju","monu"];

//method 2:-Create an empty array, and then start assigning values to them as per the index values
let name2 = [];

name2[0] = "sony";
name2[1] = "luna";
name2[2] = "sunny";
name2[5] = "sun";
console.log(name2);

//method 3:- Create an array using array constructor
let name3 = new Array("ss","mm","asfa");
console.log(name3);

let moon =[];
moon[1] = "Smily";
moon[2] = "1234567";
moon[3] = "address";
console.log(moon);

//push, pop, shift, Unshift, Length, IndexOf, LastIndexOf

//Push- Adds value at the last position only
//push("_____")

names.push("sony");
names.push(7);
console.log(names);

//pop helps us to remove the value from the last position
names.pop();
console.log(names);

//Shift removes from the 1st position and Unshift adds on the 1st position
moon.shift();
console.log(moon);

moon.unshift("bio");
console.log(moon);

//length
console.log(moon.length);

//indexOf , LastIndexOf, join, concat, reverse, sort, slice, splice,

let num1 = [1,2,3,4,4,5,5];
let num2 = [6,7,8,9,10];
console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(4));

//concat/join donot changes the original array
num1.concat(num2);
console.log(num1);
console.log(num2);
console.log(num1.concat(num2));
console.log(num1.join("*"));

//reverse-

console.log(num1.reverse());
let num3 = [5, 2,6,3,8,1,4];
console.log(num3.sort());
//console.log(names.sort());
//using sort followed by reverse gives a values arranged in descending order
console.log(names.sort().reverse());

//splice , slice
//first val gives the index and second val gives the no of values to be removed
num3.splice(2,2,3,5,6,8);
console.log(num3);
