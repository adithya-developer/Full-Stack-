/**
 * Var is keyword in JavaScript....
 * Var is a Global keyword we can access var from any where ....
 */

//var if,function...
var amount = 0;
var myName = "rahim";
function amountchanges() {
    if (myName == "rahim") {
        amount = 10000;
        console.log(myName);
        console.log(amount);
    }
}


//amountchanges();
/**
 * Let
 * Let is a scope level...
 * we can access with in the scope......
 * {
 * ..
 * scope
 * ..
 * }
 */
let id = 9869756;
let age = 20;
console.log(id);
console.log(age);

/**
 * Const
 * Const is a scope level variable..
 * we can access with  in scope ,also cannot be changed...
 */

//const PV=300;
//console.log(PV);
PV = 687;
/**The Assignment to constant variable error occurs  when trying
 * to reassign or redeclare a variable declared using the const keyword...
 * When a variable is declared using const, it can`t be reassigned or
 * redeclared....
 */