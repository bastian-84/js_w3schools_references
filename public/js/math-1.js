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

console.log(Math.sqrt(16));
console.log(Math.abs(-7.25));
console.log(Math.acos(0.5));
console.log(Math.acosh(2));
console.log(Math.asin(0.5));
console.log(Math.asinh(1));
console.log(Math.atan(2));
console.log(Math.atan2(8, 4));
console.log(Math.atanh(0.5));
console.log(Math.cbrt(125));
console.log(Math.ceil(1.4));
console.log(Math.clz32(4));
console.log(Math.cos(3));
console.log(Math.cosh(3));
console.log(Math.E);
console.log(Math.exp(3));
console.log(Math.expm1(3));
console.log(Math.floor(1.6));
console.log(Math.fround(2.60));
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.log(2));
console.log(Math.log10(2));
console.log(Math.log1p(2.7183));
console.log(Math.log2(2.7183));
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.PI);
console.log(Math.pow(4, 3));
console.log(Math.sign(3));
console.log(Math.sin(3));
console.log(Math.tan(1));
console.log();
console.log();
console.log();


console.log(Math.round(Math.random() *   10));
console.log(Math.round(Math.random() *  100));
console.log(Math.round(Math.random() * 1000));