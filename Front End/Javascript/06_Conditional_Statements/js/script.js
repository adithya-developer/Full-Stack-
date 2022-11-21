/**
 * if
 * if else
 * is else if else
 * nested if 
 * ladder if
 */

//If Condition {Prints output if condition is true}
var age = 18;
if (age >= 18) {
    //condition
    console.log("Your Eligible");//statements
}

//if using function with parameters
function eligiblity(age) {
    console.log("Eligiblity:");
    if (age > 18) {
        console.log("You are Eligible")
    }
}
eligiblity(23);

// //If else Condition
var eligiblity = 22;
if (eligiblity >= 21) {
    console.log("You are Eligible");
}
else {
    console.log("You are not Eligible");
}

// if else using function with parameters
function examEligiblity(age) {
    console.log("To Check Eligibility:");
    if (age > 18) {
        console.log('You are Eligibility');
    }
    else {
        console.log("You are not Eligible");
    }
}
examEligiblity(20);

//Functions using if else if else
function studentGrade(marks) {
    if (marks >= 26 && marks <= 49) {
        console.log("Third Class");
    }
    else if (marks >= 50 && marks <= 69) {
        console.log("Second Class");
    }
    else if (marks >= 70 && marks <= 74) {
        console.log("First Class");
    }
    else if (marks >= 75 && marks <= 100) {
        console.log("Distinction");
    }
    else {
        console.log("Invaild or Fail");
    }
}
studentGrade(prompt("Enter Marks"));//We can use prompt in function call fot entering marks dynamically.......