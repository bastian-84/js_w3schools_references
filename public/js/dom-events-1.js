// ##################################################################### //
// ########################## Hilfsfunktionen ########################## //
// ##################################################################### //
var fnGetEl = (param1) => {
    //return document.getElementById(param1);
    return document.querySelector(param1);
}

// ##################################################################### //
// ################################ Code ############################### //
// ##################################################################### //
//let sOutput01 = fnGetEl('output01');
let sOutput01 = fnGetEl('#output01');
let sB1 = fnGetEl('#b1');

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let x1 = fnGetEl('#myDIV');

let fnStartAni = () => {
    console.log('fnStartAni( )');
    x1.style.WebkitAnimation = 'mymove 4s 2';
    // chrome
    x1.style.animation = 'mymove 4s 2';
}


// Code for Chrome, Safari and Opera
x1.addEventListener("webkitAnimationStart", myStartFunction);
x1.addEventListener("webkitAnimationIteration", myRepeatFunction);
x1.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x1.addEventListener("animationstart", myStartFunction);
x1.addEventListener("animationiteration", myRepeatFunction);
x1.addEventListener("animationend", myEndFunction);

function myStartFunction() {
    this.innerHTML = "animationstart event occured - The animation has started";
    this.style.backgroundColor = "pink";
  }
  
  function myRepeatFunction() {
    this.innerHTML = "animationiteration event occured - The animation was played again";
    this.style.backgroundColor = "lightblue";
  }
  
  function myEndFunction() {
    this.innerHTML = "animationend event occured - The animation has completed";
    this.style.backgroundColor = "lightgray";
  }

  sB1.addEventListener('click', fnStartAni);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnOnBeforePrint = () => {
    alert("You are about to print this document!");
}
 */
 

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#mySelect').value;
    sOutput01.innerHTML = 'Selection: ' + x1;
}
 */
 

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    alert("You right-clicked inside the div!");
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    sOutput01.innerHTML = 'text copied';
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== drag drop ================== //
// ====================================================== //

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
  }


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    alert('The image could not be loaded.');
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

function fnDoX1() {
    alert("The anchor part has changed!");
  }

let fnDoX2 = () => {
    location.hash = 'stringHash5';
    let x1 = location.hash;
    sOutput01.innerHTML = "The anchor part is now: " + x1;
}
sB1.addEventListener('click', fnDoX2);


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */
