//this keyword return the window object

/*
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

*/
// 1. when you use it alone it returns global window object.
console.log(this);


// 2. In regular function this refers to global object.

function sum (){
    let add = 5+5;
    console.log(this);
}
sum();
// 3. In a method this refers to the owner object.

let data = {
    firstName: "manish",
    sum:()=> {
        var adddata = 2+2;
        console.log(`sum of two numbers is ${adddata}`);
        console.log(this.firstName);
    }

}

data.sum();




