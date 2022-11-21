//traditional function
function hello() {
    console.log("Hello")
}
hello();

//Arrow Functions=()=>{}
var hello() => {
    console.log("Arrow function to display Hello");
}
hello();

//Add numbers
let addUsingArrow = (a, b) => {
    const sum = a + b;
    console.log(sum);
}
addUsingArrow(10, 20);

//Display name,age, using arrow
let display = (student, age) => {
    const displayValues = student + age;
    console.log(`${displayValues}`);//string literals
    console.log(student);
    console.log(student);
    console.log(age);
}
display("Adhi,18");

//obj using arrow function
let college = [{
    fstName: "rahim",
    lstName: "mohammed",
    email: "rahimmohammed@gmail.com",
    age: 19,
    salary: 1090,
},
{
    fstName: "viran",
    lstName: "mohammed",
    email: "viranmohammed@gmail.com",
    age: 29,
    salary: 96978,
},
{
    fstName: "thammeem",
    lstName: "mohammed",
    email: "rahimmohammed@gmail.com",
    age: 99,
    salary: 100080,
}
];

college.forEach((element) => {
    console.log(element);
});

//filter
let employe = college.filter((element) => element.salary > 2500);
console.log(element);

//map
let employe = college.map((element) => element.email.toUpperCase());
console.log(employe);