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
let fnDecodeURI = () => {
    let uri = 'my test.asp?name=ståle&car=saab';
    let enc = encodeURI(uri);
    let dec = decodeURI(enc);
    let res = "Encoded URI: " + enc + "<br>" + "Decoded URI: " + dec;
    console.log(res);
}
fnDecodeURI();
 */

// ====================================================== //
// ======================= eval( ) ====================== //
// ====================================================== //
/* 
var x = 10;
var y = 20;

let sum1 = eval('x * y');
console.log(sum1);
 */
// ====================================================== //
// ===================== isFinite( ) ==================== //
// ====================================================== //
/* 
let a = isFinite(123);
let b = isFinite('String');
console.log(a + ', ' + b);
 */
// ====================================================== //
// ======================== isNaN ======================= //
// ====================================================== //
/* 
let sRes = '';
let sRes2 = '';
sRes = sRes + isNaN(123);
sRes2 = sRes2 + isNaN('String');
console.log(sRes + ', ' + sRes2);
 */

// ====================================================== //
// ====================== Number( ) ===================== //
// ====================================================== //
/* 
let x1 = true;
let x2 = false;
var x3 = new Date();
var x4 = "999";
var x5 = "999 888";

console.log(Number(x1) + ', ' + Number(x2) + ', ' + Number(x3) + ', ' + Number(x4) + ', ' + Number(x5) );
 */
// ====================================================== //
// ==================== parseFloat( ) =================== //
// ==================== String to int =================== //
// ====================================================== //
/* 
let a = parseFloat('10');
console.log(a);
console.log(typeof(a));
 */

// ====================================================== //
// ====================== String( ) ===================== //
// ====================================================== //
/* 
var x1 = Boolean(0);
var x2 = Boolean(1);
var x3 = new Date();
var x4 = "12345";
var x5 = 12345;

var res =
String(x1) + "<br>" +
String(x2) + "<br>" +
String(x3) + "<br>" +
String(x4) + "<br>" +
String(x5);

sOutput01.innerHTML = res;
 */

// ====================================================== //
// ===================== unescape( ) ==================== //
// ====================================================== //

var str="Need tips? Visit W3Schools!";
let str_esc=escape(str);
document.write(str_esc + "<br>")
document.write(unescape(str_esc))