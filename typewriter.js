"use strict";

window.addEventListener("load", init);


let txt = document.querySelector(".typewritten").textContent;
let increment = 0;

function init(){
    console.log("init");
    //get the txt
    document.querySelector(".typewritten").textContent;


    //clear HTML area
    document.querySelector(".typewritten").textContent = "";

    //start loop
    loop();
}

function loop(){
    console.log("loop");
    

// show the N'th letter:
    //set textContent to substring of 0 to N
    //increment N
    // wait before calling loop() again
            //!! you can only call a function in itself if you use 'setTimeout' !!
           if(increment < txt.length){
                document.querySelector(".typewritten").textContent += txt.charAt(increment);
                increment++;
                setTimeout(loop, 500);} 
            /* else(increment == txt.length){
                loop();} */
            
            
}