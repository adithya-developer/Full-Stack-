console.log("Data Types");
/*Strings
*Numbers
*Boolean
*Objects
*Array
*/
//Strings
console.log("Strings:");
var firstName = "Shiva";
var secondName = "Shambo";
console.log("FirstName:" + firstName);
console.log("SecondName:" + secondName);
console.log(typeof (firstName));//to print what type of datatype it is.

//Numbers
console.log("Numbers:")
var moblieNumber = 9879889686;
var age = 45;
var price = 10908.9;
console.log("MoblieNumber:" + moblieNumber);
console.log("Age:" + age);
console.log("Price:" + price);
console.log(typeof (moblieNumber));

//Boolean
console.log("Boolean:");
var isFriendShip = true;
var isQualified = false;
var isVegetable = true;
console.log("Friend:" + isFriendShip);
console.log("Student:" + isQualified);
console.log("Vegi:" + isVegetable);
console.log(typeof (isFriendShip));

//Objects
console.log("Objects:")
var details = {
    fullName: "Adithya",
    email: "itsmeadithya@gmail.com",
    age: 47,
}
console.log(details);
console.log(typeof (details))

//Array
console.log("Array:")
var fruits = ["Apple", "Mango", "Orange", "Kiwi", "StrawBerry"];
console.log(fruits);
console.log(typeof (fruits));