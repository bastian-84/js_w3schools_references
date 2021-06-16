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
/* 
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
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDo = () => {
    let c1 = document.querySelector('#myDIV');
    let c2 = c1.childElementCount;
    console.log(c2);
}

sB1.addEventListener('click', fnDo);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let c1 = document.body.childNodes;
    let sTxt = '';
    let i;
    for(i = 0; i < c1.length; i++){
        sTxt = sTxt + c1[i].nodeName + '<br />';
    }
    sOutput01.innerHTML = sTxt;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let c1 = document.body.children;
    let sTxt = '';
    let i;
    for(i = 0; i < c1.length; i++){
        sTxt = sTxt + c1[i].tagName + '<br />';
    }
    sOutput01.innerHTML = sTxt;
}
sB1.addEventListener('click', fnDoX1);
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    fnGetEl('#myDIV').classList.add('mystyle');
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    //let c1 = fnGetEl('#myDIV').clientHeight;
    let c1 = fnGetEl('#myDIV').clientWidth;
    console.log(c1);
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
   let elmnt1 = fnGetEl('#myDIV');
   let sTxt = "Border top width: " + elmnt1.clientTop + "px<br>";
   sTxt += "Border left width: " + elmnt1.clientLeft + "px";
   fnGetEl('#demo').innerHTML = sTxt;
}
sB1.addEventListener('click', fnDoX1);
 
 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let itm1 = fnGetEl('#myList2').lastChild;
    let cln1 = itm1.cloneNode(true);
    fnGetEl('#myList1').appendChild(cln1);
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let element1 = fnGetEl('#myElement');
    let closest1 = element1.closest('.container');
    if(closest1){
        closest1.style.border = "10px solid yellow";
    }

}
sB1.addEventListener('click', fnDoX1);

 */
// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let p1 = fnGetEl('#p1').lastChild;
    let p2 = fnGetEl('#p2').lastChild;
    let x1 = p1.compareDocumentPosition(p2);
    sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let span1 = fnGetEl('#mySPAN');
    let div1 = fnGetEl('#myDIV').contains(span1);
    console.log(div1);
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    fnGetEl('#myP').contentEditable = true;
    console.log('is editable');
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    fnGetEl('#myP').dir = 'rtl';
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== firstChild ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    //let txt1 = fnGetEl('#myList').firstChild.innerHTML;
    let txt1 = fnGetEl('#myList').firstElementChild.innerHTML;
    sOutput01.innerHTML = txt1;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== lastChild ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    //let txt1 = fnGetEl('#myList').lastChild.innerHTML;
    let txt1 = fnGetEl('#myList').lastElementChild.innerHTML;
    sOutput01.innerHTML = txt1;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
   
    let x1 = document.getElementsByTagName('h3')[0].getAttribute('class');
    console.log(x1);
     
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

/* 
let fnDoX1 = () => {
   
    let elmnt1 = document.getElementsByTagName('h3')[0];
    let attr1 = elmnt1.getAttributeNode('class').value;
    console.log(attr1);
     
}
sB1.addEventListener('click', fnDoX1);
 
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    var div = document.getElementById("myDiv");
    var rect = div.getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    alert("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myBtn');
    let x2 = x1.hasAttribute('name');
    console.log(x2);
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.body.hasAttributes();
    
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let list1 = fnGetEl('#myList').hasChildNodes();
    console.log(list1);
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.getElementsByClassName('anchors')[0].id;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = sB1.innerText;
    sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== alternate appendChild ================== //
// ================== insertAdjacentElement ================== //
// ================== HTML Elemente verschieben ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let s1 = document.getElementsByTagName('span')[0];
    let hH = fnGetEl('#myH4');
    hH.insertAdjacentElement('afterend', s1);
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== alternate appendChild ================== //
// ================== insertAdjacentElement ================== //
// ================== HTML Elemente verschieben ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let s1 = document.getElementsByTagName('span')[0];
    let hH = fnGetEl('#myH4');
    hH.insertAdjacentHTML('afterend', '<p>new paragraph</p>');
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== alternate appendChild ================== //
// ================== insertAdjacentElement ================== //
// ================== HTML Elemente verschieben ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let s1 = document.getElementsByTagName('span')[0];
    let hH = fnGetEl('#myH4');
    hH.insertAdjacentText('afterend', 'new text');
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== insertBefore ================== //
// ================== insert child node before ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let newItem = document.createElement('li');
    let sTextNode = document.createTextNode('Water');
    newItem.appendChild(sTextNode);

    let sList = fnGetEl('#myList');
    sList.insertBefore(newItem, sList.childNodes[0]);
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP').isContentEditable;
    sOutput01.innerHTML = x1 + ', it is editable';
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let d1 = document.documentElement;
    let x1 = d1.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== isEqualNode ================== //
// ====================================================== //
/* 
let b1 = fnGetEl('#b22');
let b2 = fnGetEl('#b23');

let fnDoX1 = (paramA, paramB) => {
    let item1 = document.getElementById(paramA).firstChild;
    let item2 = document.getElementById(paramB).firstChild;
    let xXx = item1.isEqualNode(item2);
    sOutput01.innerHTML = xXx;
}
 */

// ====================================================== //
// ================== isSameNode ================== //
// ====================================================== //
/* 
let b1 = fnGetEl('#b22');
let b2 = fnGetEl('#b23');

let fnDoX1 = (paramA, paramB) => {
    let item1 = document.getElementById('myList');
    let item2 = document.getElementsByTagName('ul')[0];
    let xXx = item1.isSameNode(item2);
    sOutput01.innerHTML = xXx;
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let item1 = document.getElementsByTagName('button')[0];
    let x1 = item1.isSupported('core', '2.0');
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);

// Note: This method is not supported in Chrome, Firefox, Opera and IE8 and earlier versions.
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP').lang;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== matches ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let elmnt1 = fnGetEl('#myElement');
    if(elmnt1.matches('.container')){
        elmnt1.innerHTML = 'matches';
    }else{
        elmnt1.innerHTML = '!matches';
    }
}
sB1.addEventListener('click', fnDoX1);
  */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    console.log(document.documentElement.namespaceURI);
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#item1').nextSibling.innerHTML;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#item1').nextElementSibling.innerHTML;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP').nodeName;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP').nodeType;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP');
    let c1 = document.getElementsByTagName('i')[0];
    let x2 = c1.childNodes[0].nodeValue;
    console.log(x2);
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let b41 = fnGetEl('#b41');
let b42 = fnGetEl('#b42');

let fnAdd = () => {
    let x1 = document.createTextNode('Click again.');
    let y1 = fnGetEl('#demo');
    y1.appendChild(x1);
    let x2 = fnGetEl('#cc');
    x2.innerHTML = y1.childNodes.length;
}
let fnReset = () => {
    let x1 = fnGetEl('#demo');
    x1.normalize();
    let y1 = fnGetEl('#cc');
    y1.innerHTML = x1.childNodes.length;
}
b41.addEventListener('click', fnAdd);
b42.addEventListener('click', fnReset);
 */


// ====================================================== //
// ================== offsetHeight ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let element1 = fnGetEl('#myDIV');
    let sTxt = "Height including padding and border: " + element1.offsetHeight + "px<br>";
    sTxt += "Width including padding and border: " + element1.offsetWidth + "px";
    fnGetEl('#demo').innerHTML = sTxt;
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let b3 = fnGetEl('#b33');

let fnDoX1 = () => {
    let testDiv = fnGetEl('#test');
    fnGetEl('#demo').innerHTML = testDiv.offsetParent;
}
b3.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== change h3 ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.getElementsByTagName('h3')[0];
    x1.outerHTML = "<h3>You changed the entire header element and it's content!</h3>";
}
sB1.addEventListener('click', fnDoX1);
 */


// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP').ownerDocument.nodeType;
    sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    //let x1 = fnGetEl('#myLI').parentNode.nodeName;
    let x1 = fnGetEl('#myLI').parentElement.nodeName;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    //let x1 = fnGetEl('#item2').previousSibling.innerHTML;
    let x1 = fnGetEl('#item2').previousElementSibling.innerHTML;
    sOutput01.innerHTML = x1;
}
sB1.addEventListener('click', fnDoX1);
  */




// ====================================================== //
// ================== Pendant appendChild, removeChild( ) ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let list1 = fnGetEl('#myList');
    list1.removeChild(list1.childNodes[0]);
}
sB1.addEventListener('click', fnDoX1);
   */


// ====================================================== //
// ================== replaceChild( ) ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let textnode1 = document.createTextNode('Water');
    let item1 = fnGetEl('#myList').childNodes[0];
    console.log(item1);
    console.log(item1);
    item1.replaceChild(textnode1, item1.childNodes[0]);
   
}
sB1.addEventListener('click', fnDoX1);
    */



// ====================================================== //
// ================== Pendant appendChild, remove ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#removeMe');
    x1.remove();
}
sB1.addEventListener('click', fnDoX1);
  */



// ====================================================== //
// ==================  remove attr ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    document.getElementsByTagName('h3')[0].removeAttribute('class');
}
sB1.addEventListener('click', fnDoX1);
  */

// ====================================================== //
// ==================  remove attr ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.getElementsByTagName('h3')[0];

    // Variant 1
    //let attr1 = x1.getAttributeNode('class');
    //x1.removeAttributeNode(attr1);

    // Variant 2
    x1.removeAttributeNode(x1.getAttributeNode('class'));
}
sB1.addEventListener('click', fnDoX1);
  */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let element1 = fnGetEl('#content21');
    let y1 = element1.scrollHeight;
    let x1 = element1.scrollWidth;
    sOutput01.innerHTML = y1 + ' ' + x1;
}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let element1 = fnGetEl('#content44');
    element1.scrollIntoView();
}
sB1.addEventListener('click', fnDoX1);
 
 */



// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX31 = () => {
    element1 = fnGetEl('#myDIV31');
    let x1 = element1.scrollLeft;
    let y1 = element1.scrollTop;
    sOutput01.innerHTML = x1 + ' ' + y1;
}
 */





// ====================================================== //
// ================== setAttribute( ) ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.getElementsByTagName('h3')[0];
    x1.setAttribute('class', 'class88');
}
sB1.addEventListener('click', fnDoX1);
  */



// ====================================================== //
// ================== setAttributeNode( ) ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = document.getElementsByTagName('h3')[0];
    let attr1 = document.createAttribute('class');
    attr1.value = 'class88';
    x1.setAttributeNode(attr1);
}
sB1.addEventListener('click', fnDoX1);
  */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let a1 = fnGetEl('#myAnchor1');
let a2 = fnGetEl('#myAnchor2');
let a3 = fnGetEl('#myAnchor3');

console.log('tabIndex of 1st a = ' + a1.tabIndex);
console.log('tabIndex of 2nd a = ' + a2.tabIndex);
console.log('tabIndex of 3rd a = ' + a3.tabIndex);

let fnDoX1 = () => {
    a1.tabIndex = '3';
    a2.tabIndex = '2';
    a3.tabIndex = '1';
    console.log('tabIndex of 1st a = ' + a1.tabIndex);
    console.log('tabIndex of 2nd a = ' + a2.tabIndex);
    console.log('tabIndex of 3rd a = ' + a3.tabIndex);
}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let x1 = fnGetEl('#myP').tagName;

    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {
    let b111 = fnGetEl('#myBtn').textContent;
    console.log(b111);
}
sB1.addEventListener('click', fnDoX1);

 */



// ====================================================== //
// ================== xxx ================== //
// ====================================================== //

let fnDoX1 = () => {
    let x1 = fnGetEl('#myAbbr').title;
    console.log(x1);
}
sB1.addEventListener('click', fnDoX1);





// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */




// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
/* 
let fnDoX1 = () => {

}
sB1.addEventListener('click', fnDoX1);
 */