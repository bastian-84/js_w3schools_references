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
/* 
function fnDoSomeInnerHTML ()  {
    //iDeventDiv1.innerHTML += '*';
    console.log('test');
};
 */
iDeventDiv1.addEventListener('mouseover', fnDoSomeInnerHTML);
//fnDoSomeInnerHTML();
//simBtn.addEventListener('click', fn1(event));
