
//first we are going to create a fucntion for confirmation box
function myfunc() {
    let confirmdat  = confirm("do you want to visit the website");
    if (confirmdat == true) {
        window.open('https://www.youtube.com/watch?v=HqcpsXoXUVg&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=15');
        return true;
    }else{
        document.write('user does not want to visit the website');
        return false;
    }
}