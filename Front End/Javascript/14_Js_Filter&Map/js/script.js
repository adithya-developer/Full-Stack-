let college = [{
    fstName: "rahim",
    lstName: "mirza",
    email: rahimmirza123@gmail.com,
age: 23,
},
{
    fstName: "usain",
        lstName: "mohammed",
            email:usainmohammed3 @gmail.com,
    age: 20,
},
{
    fstName: "rama",
        lstName: "krishna",
            email:ramakrishna23 @gmail.com,
    age: 33
},
{
    fstName: "sukhan",
        lstName: "raiz",
            email:sukhanraiz093 @gmail.com,
    age: 19,
}
];
college.forEach(element => {
    //console.log(element);
});

//filter is used to filter data
let mycollege = college.filter((element) => element.age > 18);
console.log(mycollege);

//map is use to transform the data
let UpperCase = college.map((element => element.fstName.toUpperCase()));
console.log(UpperCase);