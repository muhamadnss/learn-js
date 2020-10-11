var myNumber = 434; //First lesson
var myString = "Hello Aku Muhammad Nur Sidiq Sutrisno"; //First lesson  
var myBoolean = false; //First lesson
var myArray = [1, 3, 6, 7, 9]; //Second lesson
var mynewAray = new Array (1,3,5,6,0,9,7,2); //Second lesson
var myadvanceArray = ["Ahmad", 34, {
}]; //Second lesson
var unDefined = null; //Second lesson
var newNumber = 2; //Third lesson
if (true) {
    varNumber = 3;
} //Third lesson
console.log(varNumber); //Third lesson

myArray.push(8);

console.log(myString + " dan aku berumur " + myNumber +" serta aku memang " + myBoolean); //Second lesson
console.log(myArray); //Second lesson
myArray.pop(); //Third lesson
console.log(myArray); //Third lesson
console.log(myArray.unshift(0)); //Third lesson
console.log(myArray); //Third lesson
console.log(mynewAray); //Third lesson
console.log("New Splice Array"); //Third lesson
console.log(
    mynewAray.splice(2,6)
); //Third lesson
console.log(mynewAray); //Third lesson
mynewAray.splice(1,0,"New Beginning"); //Third lesson
console.log(mynewAray); //Third lesson
console.log(unDefined); //Second lesson

//Lesson Fourth
let myNewArray = ["Hello", 90, true, "Aku Ahmad"];

console.log(myNewArray[0]);
console.log(myNewArray[3]);
myNewArray.pop();
myNewArray.push("Aku lahir di bandung");
console.log(myNewArray[3]);
myNewArray.unshift("Salam kenal, ");
console.log(myNewArray);
console.log(myNewArray.splice(2,3));
