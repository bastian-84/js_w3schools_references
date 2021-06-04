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
// ================== arr concat( ) ===================== //
// ====================================================== //
/* 
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];

let children = hege.concat(stale, kai);
console.log(children);
 */

// ====================================================== //
// =================== arr constructor ================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnConstruct = () => {
    sOutput01.innerHTML = fruits.constructor;
}
sB1.addEventListener('click', fnConstruct);
 */

// ====================================================== //
// ================== arr copyWithin( ) ================= //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnCopy = () => {
    sOutput01.innerHTML = fruits.copyWithin(1,0);
}
sB1.addEventListener('click', fnCopy);
 */
// ====================================================== //
// ================ show arr index entry ================ //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let sF = fruits.entries();
/* 
for(iX of sF){
    sOutput01.innerHTML += iX + '<br />';
}
 */
/*
let i = 0;
for(i =0; i < fruits.length; i++){
    console.log(fruits[i]);
    let sOutput = fruits[i];
    sOutput01.innerHTML = sOutput + '<br />';
}
 */
// ====================================================== //
// ==================== arr every( ) ==================== //
// ====================================================== //
/* 
var aAges = [32, 33, 16, 40];

let fnCheckAge = (paramAge) => {
    return paramAge >= 18;
}

let fnShowAge = () => {
    sOutput01.innerHTML = aAges.every(fnCheckAge);
}

sB1.addEventListener('click', fnShowAge);
 */


// ====================================================== //
// ==================== arr filter( ) =================== //
// ====================================================== //
/* 
var aAges = [32, 33, 16, 40];

let fnCheckAge = (paramAge) => {
    return paramAge >= 18;
}

let fnShowAge = () => {
    sOutput01.innerHTML = aAges.filter(fnCheckAge);
}

sB1.addEventListener('click', fnShowAge);
 */

// ====================================================== //
// ===================== arr some( ) ==================== //
// ====================================================== //
/* 
var aAges = [32, 33, 16, 40];

let fnCheckAge = (paramAge) => {
    return paramAge >= 18;
}

let fnShowAge = () => {
    sOutput01.innerHTML = aAges.some(fnCheckAge);
}

sB1.addEventListener('click', fnShowAge);
 */


// ====================================================== //
// ===================== arr fill( ) ==================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

sOutput01.innerHTML = fruits;

let fnFill = () => {
    sOutput01.innerHTML = fruits.fill('Kiwi');
}
sB1.addEventListener('click', fnFill);
 */

// ====================================================== //
// ===================== arr find( ) ==================== //
// ====================================================== //
/* 
var aAges = [3, 10, 18, 20];

let fnCheckAge = (paramAge) => {
    return paramAge >= 18;
}

let fnShowAge = () => {
    sOutput01.innerHTML = aAges.find(fnCheckAge);
    console.log(aAges.find(fnCheckAge));
}

sB1.addEventListener('click', fnShowAge);
 */
// ====================================================== //
// ===================== arr findIndex( ) =============== //
// ====================================================== //
/* 
var aAges = [3, 10, 18, 20];

let fnCheckAge = (paramAge) => {
    return paramAge >= 18;
}

let fnShowAge = () => {
    sOutput01.innerHTML = aAges.findIndex(fnCheckAge);
    console.log(aAges.findIndex(fnCheckAge));
}

sB1.addEventListener('click', fnShowAge);
 */
// ====================================================== //
// =============== arr foreach Variante 2 =============== //
// ====================================================== //
/* 
var fruits = ["apple", "orange", "cherry"];

let fnForEachVariante2 = (item, index) => {
    sOutput01.innerHTML += index + ': ' + item + '<br />';
}

fruits.forEach(fnForEachVariante2);

 */





// ====================================================== //
// =============== arr foreach Variante 1 =============== //
// ====================================================== //
/* 
let sTxt = '';
var fruits = ["apple", "orange", "cherry"];
function fnForEach(value, index, array){
    sTxt = sTxt + value + ' ';
}
fruits.forEach(fnForEach);
console.log(sTxt);
 */
// ====================================================== //
// ================== for-each Variante 1 Bsp. ========== //
// ====================================================== //
/* 
let sTxt = '';
//let sGns = ['M9', '228', 'FN HP', '1911'];
let sGns = [9, 4,  23];
function fnForEach(value, index, array){
    sTxt = sTxt + value + ' ';
}
sGns.forEach(fnForEach);
console.log(sTxt); 
*/

// ====================================================== //
// ================= arr create from( ) ================= //
// ====================================================== //
/* 
var myArr = Array.from("ABCDEFG");

sOutput01.innerHTML = myArr;

 */

// ====================================================== //
// =================== arr includes( ) ================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let sN = fruits.includes('Mango');

console.log(sN);
 */

// ====================================================== //
// =================== arr indexOf( ) =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let sN = fruits.indexOf('Mango');

console.log(sN);
 */

// ====================================================== //
// =================== arr isArray( ) =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(Array.isArray(fruits));
 */

// ====================================================== //
// ==================== arr join( ) ===================== //
// ==================== arr to String =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.join());
 */

// ====================================================== //
// ==================== arr toString( ) ================= //
// ==================== arr to String =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());
 */




// ====================================================== //
// ===================== arr keys( ) ==================== //
// ===================== arr to obj ===================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fK = fruits.keys();

for (iX of fK) {
  sOutput01.innerHTML += iX + "<br>";
}
 */

// ====================================================== //
// ===================== arr Map( ) ===================== //
// ====================================================== //
/* 
var numbers = [4, 9, 16, 25];

console.log(numbers.map(Math.sqrt));
 */

// ====================================================== //
// ===================== arr edit ======================= //
// = siehe arr-2.js w3schools basic js ================== //
// ===================== arr pop( ) ===================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnPop = () => {
    console.log(fruits);
    fruits.pop();
    console.log(fruits);
}
fnPop();
 */


// ====================================================== //
// ===================== arr edit ======================= //
// = siehe arr-2.js w3schools basic js ================== //
// ===================== arr push( ) ==================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnPush = () => {
    console.log(fruits);
    fruits.push('Kiwi');
    console.log(fruits);
}
fnPush();
 */

// ====================================================== //
// ===================== arr edit ======================= //
// = siehe arr-2.js w3schools basic js ================== //
// ===================== arr shift( ) =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnShift = () => {
    console.log(fruits);
    fruits.shift();
    console.log(fruits);
}
fnShift();
 */


// ====================================================== //
// ===================== arr edit ======================= //
// = siehe arr-2.js w3schools basic js ================== //
// ===================== arr slice( ) =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnSlice = () => {
    console.log(fruits);
    let sSlice1 = fruits.slice(1, 3);
    console.log(sSlice1);
}
fnSlice();
  */


// ====================================================== //
// ===================== arr edit ======================= //
// = siehe arr-2.js w3schools basic js ================== //
// ===================== arr slice( ) =================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnSplice = () => {
    console.log(fruits);
    fruits.splice(2, 0, 'Lemon', 'Kiwi');
    console.log(fruits);
}
fnSplice();
 */



// ====================================================== //
// ================== arr create arr-fn ================= //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// ~~~~~~~~~~ arr fn Erstellung ~~~~~~~~~~ //
Array.prototype.fnUpperCase = function () {
    let i;
    for(i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

let fnDo = () => {
    fruits.fnUpperCase();
    sOutput01.innerHTML = fruits;
}
fnDo();
 */

// ====================================================== //
// ==================== arr reduce( ) =================== //
// ====================================================== //
/* 
var numbers = [175, 50, 25];

let fnReduce = (paramTotal, paramNum) => {
    return paramTotal - paramNum;
}

console.log(numbers.reduce(fnReduce));
 */

// ====================================================== //
// ===================== reverse( ) ===================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

let fnReverse = () => {
    console.log(fruits);
    fruits.reverse();
    console.log(fruits);
}
fnReverse();
 */


// ====================================================== //
// ===================== arr sort( ) ==================== //
// ====================================================== //
/* 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort());
 */

// ====================================================== //
// =================== arr valueOf( ) =================== //
// ====================================================== //

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.valueOf());

