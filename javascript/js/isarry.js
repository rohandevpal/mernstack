//the 'isArray' help us to know weather an  array is an object or not
//this function returns "true" when it is an array.

//making an array
const arr = [1,2,3,4,5,6];

console.log(typeof(arr)); // checking the data type of an array 
console.log(arr);

//making an object
const data = {
    name:'rohan',
    class:'12th',
    rollNum: 23
}

console.log(data);
console.log(typeof(data));

//check which one is an array
console.log(Array.isArray(arr));