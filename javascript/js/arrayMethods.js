//array methods 
/*
1. lenght - to find the lenght of an array 
2. pop - remove last element from an array
3. push - add an element in the last of an array
4. shift - remove first element from the array
5. unshift - add first element in an array
6. indexOf - check the index of an element
7. sort - sort the array in assending 
8. concat - add two array's together.
*/

//leght
let myarr = ["rohan", 78, "pal", "data"];
let lenght = myarr.length;

//print the lenght in console 
console.log(myarr);
console.log(lenght);

//pop
myarr.pop();
console.log(myarr);


//push
myarr.push('kind');
console.log(myarr);


//shift
myarr.shift();
console.log(myarr);

//unshift
myarr.unshift("data", "rohan");
console.log(myarr);

//sort
myarr.sort();
console.log(myarr);


//indexof
let data = myarr.indexOf("rohan");
console.log(data);

//concat

let yourarr = ["vishal", "karan", "tarun"];

let con = yourarr.concat(myarr);

console.log(con);