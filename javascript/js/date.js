//date

let date = new Date();
// to show only date 
let month = date.getUTCMonth() + 1;
let day =  date.getUTCDay();
let year = date.getUTCFullYear();

// print the date in body
document.write(year + "/" + month + "/" + day);

// we can set your own date also
//setMonth
//setdatte
//setfullyear


// dynamic time 
let setINterval = setInterval(clockTime, 1000);

function clockTime() {
    let clock  = document.querySelector('#clock');
    let datenew = new Date();
    let newTime  = datenew.toLocaleTimeString();
    clock.textContent = newTime;
    
}

