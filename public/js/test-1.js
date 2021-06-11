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

let iDeventDiv1 = document.querySelector('#eventDiv1');

let fnDoSomeConsoleLog = () => {
    //iDeventDiv1.innerHTML += '*';
    console.log('test');
};
let fnDoSomeInnerHTML = () => {
    sOutput01.innerHTML += '*';
    iDeventDiv1.innerHTML += '*';
    //sOutput01.innerHTML = 'test';
};

//sB1.addEventListener('mouseover', fnDoSomeConsoleLog);
//sB1.addEventListener('mouseover', fnDoSomeInnerHTML);
iDeventDiv1.addEventListener('mouseover', fnDoSomeInnerHTML);
