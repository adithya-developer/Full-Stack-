/**
 * for
 * for of
 * for in
 * for each
 */
//for
for (i = 0; i <= 10; i++) {
    console.log(i);
}

//for of
let student = [{
    fstName: "rahim",
    lstName: "md",
    email: "rahimmd@gmail.com"
},
{
    fstName: "melin",
    lstName: "md",
    email: "melinmd@gmail.com"
},
{
    fstName: "idhiuk",
    lstName: "md",
    email: "idhiukmd@gmail.com"
}
]

//for of
for (const name of student) {
    console.log(name);
}
for (const s in student) {
    console.log(s)
}
student.forEach(element => {
    console.log(element);
});