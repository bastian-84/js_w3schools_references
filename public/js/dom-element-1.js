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
// ================== accessKey ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
fnDoX1();

document.querySelector('#w3s').accessKey = 'w';
 */
// ====================================================== //
// ================== appendChild( ) ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    // create
    let sNode = document.createElement('li');
    let sTextNode = document.createTextNode('Water');

    // attributes

    // append
    sNode.appendChild(sTextNode);
    document.querySelector('#myList').appendChild(sNode);
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
console.log(sB1.attributes.length);

let fnDoX1 = () => {

}
fnDoX1();
 */
// ====================================================== //
// ================== get focus, leave focus ================== //
// ====================================================== //

let sAnchor = fnGetEl('#myAnchor');

let b01 = fnGetEl('#b01');
let b2 = fnGetEl('#b2');

let getFocus = () => {
    console.log('getFocus( )');
    sAnchor.focus();
    
}
let loseFocus = () => {
    console.log('loseFocus( )');
    sAnchor.blur();
   
}

b01.addEventListener('click', getFocus);
b2.addEventListener('click', loseFocus);

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //



// ====================================================== //
// ================== xxx ================== //
// ====================================================== //



