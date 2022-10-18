//we are going to create a programme in which we will enter username and password
//web will veryfy the usernae and password and will show the status according to the database;


//first i will create the array of object in which we will save the information of the users 
let Databse = [
        {
            username : "rohanpal",
            password : "rohanpal1997"
        }
];

// now i will status object for status
let status = [
    
    {
        name : "rohan",
        status: "thank you for login"
    }, 
    {
        name: "tarun",
        status: " welcome tarun"
    }
];


//now i will fetch the username and password using prompt
const username = prompt('enter your username');
const password = prompt('enter your password');


//now we'll check the entered data with the database for that i will create a fucntion
const checkDB = (user, pass) =>{
    //this is how we fetch the value of array of object
    if (user === Databse[0].username && pass === Databse[0].password) {
        // console.log(status);
        for(let value of status){
            console.log(value);
        }
    }else{
        alert('username and password does not matched with the database')
    }
}

//calling the function
checkDB(username, password);

