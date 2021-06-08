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
console.log(Number.isFinite(123));
console.log(Number.isInteger(123));
console.log(Number.isNaN(123));
console.log(Number.isSafeInteger(123));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number(1000000).toLocaleString("fi-FI"));
  */

// ====================================================== //
// ================== prototype, create method( ) ================== //
// ====================================================== //
/* 
Number.prototype.fnMyMethod = function() {
    return this.valueOf() / 2;
};

let fnMyFunction = () => {
    let iN = 55;
    console.log(iN.fnMyMethod());
};

fnMyFunction();
 */

// ====================================================== //
// ================== toExponential( ) ================== //
// ====================================================== //
/* 
let iNum = 5.56789;
let iN = iNum.toExponential();
console.log(iN);

let iNum2 = 5.56789;
let iN2 = iNum2.toFixed(2);
console.log(iN2);
 */
/* 
let iNum3 = 13.3714;
let iN3 = iNum3.toPrecision(2);
console.log(iN3);
 */

var num = 15;
var n = num.toString();
console.log(n);
console.log(typeof(n));
console.log(num.valueOf());