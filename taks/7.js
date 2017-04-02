'strict mode';



function zamiana() {
    document.getElementsByTagName('p')[0].style.backgroundColor = "red";
    document.getElementsByTagName('p')[1].style.backgroundColor = "blue";
    
}

document.getElementById('guzik').onclick = zamiana;




function czyszczenie() {
    document.getElementsByTagName('p')[0].style.backgroundColor = "";
    document.getElementsByTagName('p')[1].style.backgroundColor = "";
    
}

document.getElementById('guzik2').onclick = czyszczenie;



































/*

var parFirst = document.getElementById('parFirst');




var btn = document.createElement("button");
var btnText = document.createTextNode("Click on me!");
var btnClass = document.createAttribute('class');

btnClass.value = 'button-class';
btn.appendChild(btnText);
btn.setAttributeNode(btnClass);


//////////////////////////// 


parFirst.insertBefore(btn, parFirst.children[2]);


///////////////////////////////////


var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i<allLinks.length; i++) {
    allLinks[i].removeAttribute('class'); ///[i] jest tu kluczowe... KONIECZNIE POĆWICZYC PĘTLE
}

*/

