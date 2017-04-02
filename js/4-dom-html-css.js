'uer strict';

var naglowek = document.getElementById('main-header');


console.log(naglowek.innerText);


naglowek.innerText = "Tekst nagłówka po zmianie";  //wpisywanie bezpośrefnio tekstu, z pominięciem znaczników html

naglowek.innerHTML = "Tekst nagłówka po <span>zmianie</span>"; // a to daje nam możliwość wpisywania do znaczników html


naglowek.outerHTML = "<h2>" + naglowek.innerText +  "</h2>"; // dzięki temu możemy nadpisywać np tutaj z h1 na h2 i h1 jest całkowiecie nadpisane

document.getElementsByTagName('h2')[0].id = "main-header-after-change";

document.getElementsByTagName('h2')[0].className = "header header-default";

console.log(document.getElementsByTagName('h2')[0].classList)  // classList wyrzuca nam listę klas dla danego elementu

document.getElementsByTagName('h2')[0].style.border = "2px red solid";
