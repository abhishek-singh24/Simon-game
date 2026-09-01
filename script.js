 let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;

let heading = document.querySelector("h2");
let btn = ["red", "yellow", "green", "purple"];

// Start game
document.addEventListener("keypress", function () {

    if (started == false) {

        console.log("game has been starting");

        started = true;
        levelup();
    }

});


// Level up
function levelup() {

    userSeq = [];
    level += 1;

    heading.innerText = `Level ${level}`;

    // Random color
    let idx = Math.floor(Math.random() * btn.length);
    let rcolor = btn[idx];

    let rbtn = document.querySelector("." + rcolor);

    console.log(rbtn);
    console.log(idx);
    console.log(rcolor);

    gameSeq.push(rcolor);

    console.log(gameSeq);

    gameFlash(rbtn);
}


// Game flash
function gameFlash(a) {

    a.classList.add("Flash");

    setTimeout(() => {
        a.classList.remove("Flash");
    }, 500);
}


// Select all buttons
let btns = document.querySelectorAll(".btn");

for (let btn of btns) {

    btn.addEventListener("click", btnPress);

}


// User button press
function btnPress() {

    let item = this;

    console.log("button is clicked");

    let usercolor = item.getAttribute("id");

    userSeq.push(usercolor);

    console.log(userSeq);

    userFlash(item);

    checkAns(userSeq.length - 1);
}


// User flash
function userFlash(b) {

    b.classList.add("userFlash");

    setTimeout(() => {
        b.classList.remove("userFlash");
    }, 500);
}


// Check answer
function checkAns(Idx) {

    if (userSeq[Idx] == gameSeq[Idx]) {

        // User completed current sequence
        if (userSeq.length == gameSeq.length) {

            levelup();

        }

    } else {

        heading.innerHTML = `Game Over!<b>${level},</b> <br> Press any key to start`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor ="white";
        },150)
        //note:- we used innerhtml beacause cose't use html tag inside of innerText property.
        reset()
        
    }
}

// reset

function reset(){
      
     started = false;
     userSeq = [];
     gameSeq = [];
     level =  0;
}