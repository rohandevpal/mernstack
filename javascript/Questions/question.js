
// Question 1. :  Write a JavaScript program to print the contents of the current window.
let print = () => {
    window.print();
}
// print();

// Question 2. : Write a JavaScript program to get the current date.
let date = new Date();

let day = date.getUTCDay();
let month = date.getUTCMonth();
let year = date.getUTCFullYear();


// document.write(`0${day}/0${month}/${year}`);

// Question 3: 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
let side1 = 5;
let side2 = 7;
let side3 = 8;

let param = (side1+side2+side3)/2;
let result = Math.floor(Math.sqrt(param*((param-side1)*(param-side2)*(param-side3))));
// console.log(result);


//Question 4 : 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  
const input1 = document.querySelector('#val1');
const input2 = document.querySelector('#val2');
const btnmulti = document.querySelector('#multi');
const btndivide = document.querySelector('#div');
const res = document.querySelector('.res');



btndivide.addEventListener('click', function(){
    let val1 = input1.value;
    let val2 = input2.value;
    console.log(val1, val2);
    let divide = (a, b) =>{
        let data = val1 / val2;
        res.textContent = "answer :" + data;
    }

    divide(val1, val2)
})


btnmulti.addEventListener('click', ()=>{
    let val1 = input1.value;
    let val2 = input2.value;
    let multiply = (a,b) =>{
        let data = val1 * val2;
        res.textContent = "answer: " +data;
    }
    
    multiply(val1, val2);

})



//sort an array 
let arr = ["rohan", "data", "fetch", "hi", "text"];

//push some new data in array
arr.push('i am inserting new data into array');
console.log(arr);

//making and array of an object
let arrobj = [
    {
        name: "rohan",
        age : "23", 
        profession : "javascript Developer", 
        work  : "making API's"
    }, 
    {
        name : "tarun", 
        age : "25", 
        profesion : "software developer",
        work : "making software and working on mobile apps"
    }
];

console.log(arrobj);

//isert newdata in object

arrobj[1].experience = "3 years";
console.log(arrobj);


// push data in array 100 times
let array = [];
// console.log(array);

while (array.length != 50) {
    array.push(Math.floor(Math.random()*100));
    console.log(array);
    document.write(array, "<br>")
}

