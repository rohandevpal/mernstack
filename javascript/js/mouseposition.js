//we will check the position of mouse point
let mouseXstartpoint = 300;
let mouseXendpoint = window.innerWidth - 300;
let currentXposition = 0;
let fractionXvalue = 0;

let mouseXrange  = mouseXendpoint - mouseXstartpoint;
console.log(mouseXrange);

const mouseMove = (event)=>{
    // console.log(`x value = ${event.clientX} & Y value = ${event.clientY} `);
    currentXposition = event.clientX - mouseXstartpoint;
    fractionXvalue = currentXposition / mouseXrange;
    console.log(fractionXvalue);

}
window.addEventListener('mousemove', mouseMove);

