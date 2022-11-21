/**
 * Three different types of alerts:
 * Alert
 * Prompt
 * Confirm
 */
//Alert
alert("Alert:welcome to JavaScript");//display message

//confirm
confirm("Confirm:Do you want to continue");

//Prompt
prompt("Enter Values:");
var value = prompt("Enter Value:")
console.log(value);

//Adding two numbers using Prompt
var value1 = Number(prompt("Enter value"));
var value2 = Number(prompt("Enter value2"));
var sum = (value1 + value2);
console.log(sum);

//Multiplication
var mul1 = Number(prompt("Enter value1"));
var mul2 = Number(prompt("Enter value2"));
var mul = (mul1 * mul2);
console.log(mul);

//Division
var div1 = Number(prompt("Enter value1"));
var div2 = Number(prompt("Enter value2"));
var div = (div1 / div2);
console.log(div);