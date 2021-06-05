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
// ================== Date.prototype   ================== //
// ====================================================== //
/* 
Date.prototype.methMonths = function () {
    if (this.getMonth() == 0) {
        this.myProp = "January"
    };
    if (this.getMonth() == 1) {
        this.myProp = "February"
    };
    if (this.getMonth() == 2) {
        this.myProp = "March"
    };
    if (this.getMonth() == 3) {
        this.myProp = "April"
    };
    if (this.getMonth() == 4) {
        this.myProp = "May"
    };
    if (this.getMonth() == 5) {
        this.myProp = "June"
    };
    if (this.getMonth() == 6) {
        this.myProp = "July"
    };
    if (this.getMonth() == 7) {
        this.myProp = "August"
    };
    if (this.getMonth() == 8) {
        this.myProp = "September"
    };
    if (this.getMonth() == 9) {
        this.myProp = "October"
    };
    if (this.getMonth() == 10) {
        this.myProp = "November"
    };
    if (this.getMonth() == 11) {
        this.myProp = "December"
    };
}

let fnDatefunction = () => {
    let sD = new Date();
    sD.methMonths();
    console.log(sD.myProp);
}
fnDatefunction();
 */
// ====================================================== //
// ========================= now ======================== //
// ====================================================== //
/* 
let sN = Date.now();
console.log(sN);
 */

// ====================================================== //
// =================== date to String =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toDateString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toISOString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toISOString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toJSON =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toJSON();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toLocaleDateString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toLocaleDateString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toLocaleTimeString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toLocaleTimeString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toLocaleString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toLocaleString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toTimeString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toTimeString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// =================== toUTCString =================== //
// ====================================================== //
/* 
let sD = new Date();
let sN = sD.toUTCString();
console.log(sN);
console.log(typeof(sN));
 */

// ====================================================== //
// ===================== valueOf( ) ===================== //
// ====================================================== //

let sD = new Date();
let sN = sD.valueOf();
console.log(sN);
console.log(typeof(sN));