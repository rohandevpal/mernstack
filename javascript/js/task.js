const valueFromInput = document.querySelector('.insert');
const fetchBtn = document.querySelector('#fetch');

let myarr = [];

//first we will fetch the value from the input feild
fetchBtn.addEventListener('click',()=>{
    let fetchedValue = valueFromInput.value;    
    console.log(fetchedValue);
    let random = Math.floor(Math.random() * 70) ;
       
    //now i will push the value 100 times in my empty array
    while (myarr.length !=100) {
      myarr.push(random);

    }
    
   let fethcedarr =  myarr;
    fethcedarr.push("hi");
    console.log(myarr);    
});


//Check how many times an Element appears in an Array 

const arr = [1,2,4,4,4,2,5,6,7, 3, 3 ,3,3,3,3];

let count = 0;

arr.forEach(element => {
  if (element === 3) {
    count += 1;
  }
});

console.log(count);




