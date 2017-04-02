'strict mode';
console.log('siema');
//
//
//function zamiana() {
//    document.getElementsByTagName('p')[0].style.backgroundColor = "red";
//    document.getElementsByTagName('p')[1].style.backgroundColor = "blue";
//    
//}

var zmienna1 = document.getElementsByName('fname').value;
     //      console.log(document.getElementsByName('fname')[0].value);

var zmienna2 = document.getElementsByName('lname').value;
  //  console.log(document.getElementsByName('lname')[0].value);

function pobierzImie(e) {
    
    e.preventDefault();
        console.log(document.getElementsByName('fname')[0].value);
        console.log(document.getElementsByName('lname')[0].value);

}


document.getElementById('formularz').onsubmit = pobierzImie;








//function wyrzucWar() {
//    document.getElementsByName('fname')[0];
//    console.log(document.getElementsByName('fname'));
//}
















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

