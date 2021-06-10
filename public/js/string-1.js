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

let sString = 'Hello World';
let sStr1 = 'Hello';
let sStr2 = 'World';

console.log(sString.charAt(0));
console.log(sString.charCodeAt(0));
console.log(sStr1.concat(sStr2));
console.log(sStr1.localeCompare(sStr2));
console.log(sString.endsWith('World'));
console.log(sString.includes('World'));
console.log(sString.indexOf('World'));
console.log(sString.lastIndexOf('World'));
console.log(String.fromCharCode(65));
console.log(sString.length);
console.log(sString.match(/wor/g));
console.log(sString.repeat(2));
console.log(sString.replace('Hello', 'Hallo'));
console.log(sString.search('Hello'));
console.log(sString.slice(0, 5));
console.log(sString.split(' '));
console.log(sString.startsWith('Hello'));
console.log(sString.substr(1, 4));
console.log(sString.substring(1, 4));
console.log(sString.toLocaleLowerCase());
console.log(sString.toLocaleUpperCase());
console.log(typeof(sString));
console.log(sString.trim());
console.log(sString.valueOf());
console.log(sString);
console.log(sString);


// ====================================================== //
// ======================= Object ======================= //
// ====================================================== //

function employee  (paramName, paramJobTitle, paramBornIn) {
    this.oName = paramName;
    this.oJobTitle = paramJobTitle;
    this.oBornIn = paramBornIn;
}
//employee.prototype.salary = 2000;

let claire = new employee('Claire Redfield', 'Freelancer', 1984);
//console.log(claire);

employee.prototype.oSalary = 2000;
console.log(claire.oSalary);
console.log(claire);
