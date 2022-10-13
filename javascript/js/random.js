// create a random number
const random = document.querySelector('.random');
console.log(random);

setInterval(()=>{
   let data =  Math.floor(Math.random() * 30);
   random.textContent = data;
}, 1000)