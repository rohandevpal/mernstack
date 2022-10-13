// set time out function use to show something after some specific time.

let setTime = setTimeout(showAlert, 3000);

function showAlert() {
   let feedback =  prompt('please share your feedback');
   if (feedback) {
       document.write(feedback);
   }else{
    document.write('user does not shared his/her feedback');
   }
}


