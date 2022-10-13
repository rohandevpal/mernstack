const value = document.querySelectorAll('.cal');
const input = document.querySelector('.one');
const equele = document.querySelector('#equals');
const AC = document.querySelector('#AC');


let cal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"];
let countarr = cal.length;

for (i = 0; i < 14; i++) {
    console.log(cal[i]);
    document.write("<button value='" + cal[i] + "' name='" + cal[i] + "' id='" + cal[i] + "' onclick='myFunction(this)'>" + cal[i] + "</button><br>");

}

function myFunction(ele) {
    var id = ele.id;
    input.value += id;
       
}

equele.addEventListener('click', () => {
    let final = eval(document.querySelector('.one').value);
    document.getElementById('res').value = final;
})

AC.addEventListener('click', () => {
    input.value = "";
    document.getElementById('res').value = "";
})




// find power 












