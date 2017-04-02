'strict mode';

var parFirst = document.getElementById('parFirst');

var firstParId = parFirst.getAttributeNode('id');


console.log(firstParId);

//console.log(parFirst.parentNode);

console.log(parFirst.parentNode);
console.log(parFirst.childNodes[1]);
console.log(parFirst.children); // łapie same znaczniki bez tekstu wewnątrz 

console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);

var link = parFirst.children[1];
console.log(link);

console.log(link.nextSibling);  
console.log(link.previousSibling);


console.log(link.nextElementSibling);   // z Element wyszukuje tylko tahi html
console.log(link.previousElementSibling);

var parFirstNodes = parFirst.childNodes;

for (var i = 0; i < parFirstNodes.length; i++) {
    console.log(parFirstNodes[i].nodeType);
    
    if(parFirstNodes[i].nodeType == 8) {
        console.log('W tym dokumencie jest komentarz' + parFirstNodes[i]);
    }
}


var btn = document.createElement("button");
var btnText = document.createTextNode("Click on me!");
var btnClass = document.createAttribute('class');

btnClass.value = 'button-class';
btn.appendChild(btnText);
btn.setAttributeNode(btnClass);

parFirst.appendChild(btn);


//////////////////////////// 


parFirst.insertBefore(btn, parFirst.children[2]);


///////////////////////////////////


var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i<allLinks.length; i++) {
    allLinks[i].removeAttribute('class'); ///[i] jest tu kluczowe... KONIECZNIE POĆWICZYC PĘTLE
}


