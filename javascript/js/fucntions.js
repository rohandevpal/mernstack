// fucntions


// function without parameters
function sum() {
    var a = 89;
    var b = 98;
    var c  = a + b;
    // document.write("sum of two numbers is : " +c);
}
//call the fucntion
sum();

// function with parameters
function sum2(a , b) {
    var c = a + b;
    // document.write("sum of two numbers is : " +c);
}
//call sum 2
sum2(56, 990); // you must be pass values while calling the function



//function with return data
let returndata = rohan(899, 78);
document.write(returndata) 

function rohan(c,d) {
    let  a = c+d;
    return a;
    
}