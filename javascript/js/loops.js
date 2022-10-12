'use strict';

// we have three types of loops 

/*

1. while loop
2. do while loop 
3. for loop

*/

//first we'll do while loop " which is a entry level loop";

// print numbers from 1 to 10 

//define a varibale
let i= 1;
while (i<=10) {
    // console.log(i);
    i++;
}

//now we will make a table of 2
let a = 2;
let b = 1;
while (a<=20) {
    // document.write("2"+"*"+b+" = " +a);
    // console.log("19"+"*"+b+" = " +a);
    a = a +2;
    b++;
    // document.write('<br>');

}


//do while loop
let c = 2;
let d = 1;
do{
    document.write("2"+"*"+d+" = " +c);
    // console.log("19"+"*"+b+" = " +a);
    c = c +2;
    d++;
    document.write('<br>');

}while (c<=20) ;


//for loop
let num = 1;
for (let num = 1; num < 101; num++) {
   console.log(num);
    
}