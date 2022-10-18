
//creating objects
let obj = {
    FirstName : "Rohan",
    LastName : "pal",
    Age : 25,
    Profession : "web Developer"
}

console.log(typeof(obj));
console.log(obj);

//calling object properties
console.log(obj.FirstName);

//insert new propertie in an object
obj.Experience = "2+ Years";

console.log(obj);

// delete propertie from obj
delete obj.LastName;
console.log(obj);
