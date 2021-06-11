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
let fnShowActiveElement = () => {
    let s1 = document.activeElement.tagName;
    sOutput01.innerHTML = s1;
}

fnShowActiveElement();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fn1 = () => {
    let s1 = document.anchors.length;
    sOutput01.innerHTML = s1;
}
fn1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let s1 = document.baseURI;
console.log(s1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fn1 = () => {
    document.open();
    document.write('test');
    document.close();
}
fn1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fn1 = () => {
   let s1 = document.cookie;
   console.log(s1);
}
fn1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fn1 = () => {
   let s1 = document.characterSet;
   console.log(s1);
}
fn1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fn1 = () => {
   let c1 = document.createComment('My comment');
   document.body.appendChild(c1);
   
}
fn1();
 */


// ====================================================== //
// ================== change <li> ================== //
// ====================================================== //
/* 
let fn1 = () => {
    let d1 = document.createDocumentFragment();
    d1.appendChild(document.getElementsByTagName('li')[0]);
    d1.childNodes[0].childNodes[0].nodeValue = 'Milk';
    document.getElementsByTagName('ul')[0].appendChild(d1);
}
sB1.addEventListener('click', fn1);
 */

// ====================================================== //
// ================== create element ================== //
// ====================================================== //
/* 
let fn1 = () => {
    let newBtn = document.createElement('button');
    document.body.appendChild(newBtn);
}
sB1.addEventListener('click', fn1);
 */
// ====================================================== //
// ================== create event ================== //
// ================== (event) kann nicht (paramEvent) heißen, muss in HTML Element als event hinterlegt sein. Nicht mit addEventListener ================== //
// ====================================================== //
/* 
let iDeventDiv1 = document.querySelector('#eventDiv1');
let simBtn = fnGetEl('#simBtn');

let fn1 = (event) => {
    let x1 = document.createEvent('MouseEvent');
    x1.initMouseEvent('mouseover', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    iDeventDiv1.dispatchEvent(x1);
};
let fnDoSomeInnerHTML = () => {
    iDeventDiv1.innerHTML += '*';
    console.log('test');
};
 */
/* 
function fnDoSomeInnerHTML ()  {
    //iDeventDiv1.innerHTML += '*';
    console.log('test');
};
 */
/* 
iDeventDiv1.addEventListener('mouseover', fnDoSomeInnerHTML);
//fnDoSomeInnerHTML();
//simBtn.addEventListener('click', fn1(event));
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let t1 = document.createTextNode('textnode');
document.body.appendChild(t1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.defaultView;
    console.log(x1);
}
fnDoX1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.doctype.name;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.documentElement.nodeName;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.documentMode;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.documentURI;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.domain;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.embeds.length;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== mark Text, press shift ================== //
// ====================================================== //
/* 
document.designMode = "on";

let fnDoX1 = (event) => {
    if(event.keyCode == 16){
        document.execCommand('bold');
    }
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.forms.length;
    console.log(x1);
}
fnDoX1();
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

//setInterval("fnDoX1()", 1);
/* 
let fnDoX1 = () => {
    let x1 = sOutput01;
    if(x1.hasFocus()){
        console.log('has focus');
    }else{
        console.log('has no focus');
    }
    
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.images.length;
    console.log(x1);
}
fnDoX1();
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.implementation;
    console.log(x1.hasFeature("HTML", "1.0"));
}
fnDoX1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.inputEncoding;
    console.log(x1);
}
fnDoX1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.lastModified;
    console.log(x1);
}
fnDoX1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.links.length;
    console.log(x1);
}
fnDoX1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let bAdd = fnGetEl('#bAdd');
let bRem = fnGetEl('#bRem');

let fnDoX1 = () => {
    let x1 = document.links.length;
    console.log(x1);
}
window.onload = fnDoX1();

let fnAddTextNode = () => {
    //console.log('test add');
    let x1 = document.createTextNode('Click again');
    let y1 = document.body;
    y1.appendChild(x1);
    let x2 = fnGetEl('#cc');
    x2.innerHTML = y1.childNodes.length;
}

let fnRemTextNode = () => {
    //console.log('test remove');
    document.normalize();
    let y1 = document.body;
    let x2 = fnGetEl('#cc');
    x2.innerHTML = y1.childNodes.length;
}
//fnDoX1();

bAdd.addEventListener('click', fnAddTextNode);
bRem.addEventListener('click', fnRemTextNode);
 */

// ====================================================== //
// ================== querySelector / querySelectorAll ================== //
// ====================================================== //
/* 
let sB2 = fnGetEl('#sB2');
let sB3 = fnGetEl('#sB3');

let fnDoX1 = () => {
    let x1, i1;
    x1 = document.querySelector('.h3Class');
    //x1 = document.querySelectorAll('.h3Class');
    x1.style.backgroundColor = 'lime';
    console.log('test fnDoX1');
    
}
sB2.addEventListener('click', fnDoX1);

let fnDoX2 = () => {
    let x1, i;
    //x1 = document.querySelector('.h3Class');
    x1 = document.querySelectorAll('.h3Class');
    for(i = 0; i < x1.length; i++){
        x1[i].style.backgroundColor = 'lime';
    }
    
    console.log('test fnDoX2');
    
}
sB3.addEventListener('click', fnDoX2);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.readyState;
    console.log(x1);
}
fnDoX1();
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let sOutp2 = fnGetEl('#output2');
let startEventListener = fnGetEl('#startEventListenerBtn');
let stopEventListener = fnGetEl('#stopEventListenerBtn');

let fnStart = () => {
    console.log('fnStart( ) works');
    sOutp2.innerHTML = Math.round(Math.random() *  100);
    sOutp2.style.backgroundColor = 'lime';
}
let fnSetInterval = () => {
    setInterval(fnStart, 1000);
    //setTimeout(fnStart, 1000);
}
let fnStop = () => {
    console.log('fnStop( )');
    startEventListener.removeEventListener('click', fnSetInterval);
    sOutp2.style.backgroundColor = 'blue';
}
/* 
let fnStopSetInterval = () => {
    setInterval(fnStop, 1000);
    //setTimeout(fnStart, 1000);
}
  */

/*
startEventListener.addEventListener('click', fnSetInterval);
stopEventListener.addEventListener('click', fnStop);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

/* 
let fnDoX1 = () => {
    let x1 = document.scripts.length;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

/* 
let fnDoX1 = () => {
    let x1 = document.title;
    console.log(x1);
}
fnDoX1();
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


let fnDoX1 = () => {
    let x1 = document.URL;
    console.log(x1);
}
fnDoX1();



// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
