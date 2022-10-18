//callback fucntion is used when you want to complete one task after finishing the first task second one should call.

//first i will create two arrow functions
let friends = (name, callback) =>{
    setTimeout(()=>{
        console.log(`your name is ${name}`); //template string
        callback();
    }, 3000)
}

// function two 
let student = () => {
console.log('hi');
}

friends("mms",student);

//functions with parameter
let callmeback = (a, b) =>{
    console.log(a+b);
}

let minus = (c, d) =>{
    console.log(c-d);
}

callmeback(5,8);
minus(89, 56);
