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

let fnInput = () => {
    let sMessage, sX;
    sMessage = sOutput01;
    sMessage.innerHTML = '';
    sX = document.querySelector('#demo').value;
    try {
        if (sX == "") {
            throw "is Empty";
            // console.log("is Empty");
        };
        if (isNaN(sX)) {
            throw "not a number"
        };
        if (sX > 10) {
            throw "too high"
        };
        if (sX < 5) {
            throw "too low"
        };
    } catch (err) {
        sMessage.innerHTML = 'Input ' + err;
    }
}

sB1.addEventListener('click', fnInput);