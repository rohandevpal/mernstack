// we have two ways to print the document first for whole page and secondly for a particular section


//whole page 
function wholebody() {
    window.print();
}

//only specific section
function myfun(paravalue) {
    let wholebody = document.body.innerHTML;
    let singlebody = document.getElementById(paravalue).innerHTML;
    console.log(singlebody);
    document.body.innerHTML = singlebody;
    window.print();
    document.body.innerHTML = wholebody;
}