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
/* 
function fnDoX1() {
    alert("The anchor part has changed!");
  }

let fnDoX2 = () => {
    location.hash = 'stringHash5';
    let x1 = location.hash;
    sOutput01.innerHTML = "The anchor part is now: " + x1;
}
sB1.addEventListener('click', fnDoX2);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = fnGetEl('#myInput').value;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  alert("You pressed a key inside the input field");
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
if(typeof(EventSource) !== "undefined") {
  var source = new EventSource("/html/demo_sse.php");
  source.onopen = function() {
    document.getElementById("myH1").innerHTML = "Getting server updates";
  };
  
  source.onmessage = function(event) {
    document.getElementById("myDIV43").innerHTML += event.data + "<br>";
  };

} else {
  document.getElementById("myDIV43").innerHTML = "Sorry, your browser does not support server-sent events...";
}
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  alert('text');
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  sOutput01.innerHTML = "You pasted text!";
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let iW = window.outerWidth;
  let iH = window.outerHeight;
  let sOutput = iW + ', ' + iH;
  sOutput01.innerHTML = sOutput;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let x1 = 0;
let fnDoX1 = () => {
  sOutput01.innerHTML = x1 += 1;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = fnGetEl('#myInput');
  sOutput01.innerHTML = x1.value;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  alert("You selected some text!");
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

/* 
let fnDoX1 = () => {
  this.innerHTML = "transitionend event occured - The transition has completed";
  this.style.backgroundColor = "pink";
}

document.getElementById('myDIV443').addEventListener('webkitTransitionEnd', fnDoX1);
document.getElementById('myDIV443').addEventListener('transitionend', fnDoX1);

sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let w1 = fnGetEl('#myDIV221');

let fnDoX1 = () => {
  console.log('fn called');
  w1.style.fontSize = "35px";     // NOT USING THIS, VAR NAME NEEDED
}

w1.addEventListener('wheel', fnDoX1);
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let isKeyPressed = (event) => {
  if (event.altKey) {
    alert("The ALT key was pressed!");
  } else {
    alert("The ALT key was NOT pressed!");
  }
}
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let x11 = fnGetEl('#myDIV558');


let myStartFunction = (event) => {
  console.log('fn called');
  x11.innerHTML = "The animation-name is: " + event.animationName;
}


// Code for Chrome, Safari and Opera
x11.addEventListener("webkitAnimationStart", myStartFunction);

// Standard syntax
x11.addEventListener("animationstart", myStartFunction);

 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


/* 
let fnDoX1 = (paramEvent) => {
  let x1 = paramEvent.bubbles;
  sOutput01.innerHTML = x1;

}
//sB1.addEventListener('click', fnDoX1);
 */



// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = (paramEvent) => {
  alert('pressed ' + paramEvent.button);
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = (paramEvent) => {
  let x1 = paramEvent.cancelable;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = (paramEvent) => {
  let x11 = paramEvent.charCode;
  sOutput01.innerHTML = x11;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = (paramEvent) => {
  var x = paramEvent.clientX;
  var y = paramEvent.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  sOutput01.innerHTML = coords;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = (pamEvent) => {
  let x1 = pamEvent.code;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let div556 = fnGetEl('#div556');

let fnDoX1 = () => {

  div556.innerHTML += '*';

  var x = document.createEvent("MouseEvent");
  x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

  sOutput01.dispatchEvent(x);
}

//sB1.addEventListener('click', fnDoX1);
div556.addEventListener('mouseenter', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.defaultView;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.doctype.name;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.documentElement.nodeName;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.documentMode;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.documentURI;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.domain;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.embeds.length;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
document.designMode = "on";

let fnDoX1 = (prmEvent) => {
  if(prmEvent.keyCode == 16){
    document.execCommand('bold');
  }
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.forms.length;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let s444 = fnGetEl('#demo444');

let fnDoX1 = () => {
  if(document.hasFocus()){
    sOutput01.innerHTML = 'has focus';
  }else{
    sOutput01.innerHTML = 'has no focus';
  }
}
sB1.addEventListener('click', fnDoX1);

setInterval(fnDoX1, 1);
 */
/* 
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

let fnDoX1 = () => {
  
  let x1 = document.images.length;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  var imp = document.implementation;
  sOutput01.innerHTML = imp.hasFeature("HTML", "1.0");
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.inputEncoding;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.lastModified;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
  let x1 = document.links.length;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let b1111 = fnGetEl('#b1111');
let b2222 = fnGetEl('#b2222');

let fnAddTextNode = () => {
  var x = document.createTextNode(" Click again.");
  var y = document.body;
  y.appendChild(x);
  var x2 = document.getElementById("cc");
  x2.innerHTML = y.childNodes.length;
}
let fnNormPara = () => {
  document.normalize();
  var x = document.body;
  var y = document.getElementById("cc");
  y.innerHTML = x.childNodes.length;
}
b1111.addEventListener('click', fnAddTextNode);
b2222.addEventListener('click', fnNormPara);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
 /* 
let fnDoX1 = () => {
  let x1 = document.readyState;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
 /* 
let fnDoX1 = () => {
  let x1 = document.scripts.length;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
 /* 
let fnDoX1 = () => {
  let x1 = document.title;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
 
let fnDoX1 = () => {
  let x1 = document.URL;
  sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 

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
