/*
dynamic typing test

steps to follow 

*get all the required elements

1. when user click on start button textarea should be active else it should be always disabled.

2. everytime a new set of line on top. whenever a start button pressed. not the done one.

3. Get the time and change the button text on "DOne".

4. Get the end time when user click on done button, find the total time taken

5. find the total words set of words.

6. find the speed of the user and show it on the top of screen when user clicked on 'DOne'.

7. then call the compare words fun and find how many of these words are matching how not. display the result.

*/

//first i will create an array for "setOfWords".

let setOfWords = [
    "when user click on start button textarea should be active else it should be always disabled.",
    "everytime a new set of line on top. whenever a start button pressed. not the done one.",
    "Get the time and change the button text on 'DOne'.",
    "Get the end time when user click on done button, find the total time taken",
    "find the total words set of words.",
    "find the speed of the user and show it on the top of screen when user clicked on 'DOne'.",
    "then call the compare words fun and find how many of these words are matching how not. display the result."
];


//get all the required elements
const textfortype = document.querySelector('.textfortype');
const typingarea = document.querySelector('#typingarea');
const startbtn = document.querySelector('#starttest');
let startTime;
let endTime;


//function for get the string from the array
const  showtext = () =>{
    let randomText = Math.floor(Math.random()*setOfWords.length)
    textfortype.textContent = setOfWords[randomText];
    let date = new Date();
    startTime = date.getTime();
    startbtn.textContent = "Done";
}


const endgame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalwords = typingarea.value;
     
    let wordcount = wordcounter(totalwords)
    console.log(wordcount);

    //count speed
    let speed = Math.floor((wordcount /totalTime )* 60);
    console.log("speed" + speed);

    // textfortype.textContent = "your total speed of typing" + " " + speed;
    let finalmsg = "your total speed of typing" + " " + speed + " ";
    finalmsg += comparewords(textfortype.textContent, totalwords);

    textfortype.textContent = finalmsg;

}

const comparewords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;


    words1.forEach( (item, index) =>{
            if (item == words2[index]) {
                count++;                
            }  
    })

    let erorwords = (words1.length - count);
    return(count + " " + "correct out of " + " " + words1.length + "words and total number of error are " + erorwords + " . ");

}


// function for counting words
const wordcounter = (str)=>{
    let words = str.split(" ").length;
        console.log(words);
    return words;

}
//task one
startbtn.addEventListener('click', ()=>{
    if (startbtn.textContent == 'Start') {
        typingarea.disabled = false;
        showtext();     
    }else if(startbtn.textContent == "Done"){
        typingarea.disabled = true;
        endgame();
    }
})

