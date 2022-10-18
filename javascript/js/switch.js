// we are using switch case 
// A switch statement can replace multiple if checks.
// It gives a more descriptive way to compare a value with multiple variants.

let insert = prompt('Please enter Day');
// console.log(insert);

let day = 4;
console.log(day);

switch (day) {
    case 1:
        console.log(alert('Today is monday'));       
        break;
    case 2:
        alert('today is tuesday');
        break;
    case 3:
        alert('today is wednesday');
        break;
    case 4:
        alert('today is thursday');
        break;
    case 5:
        alert('today is friday');
        break;
    case 6:
        alert('today is saturday');
        break;

    case 7:
        alert('todayis sunday');
        break;

    default:
        break;
}