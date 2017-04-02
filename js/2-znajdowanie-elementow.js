'use strict';



var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var link = document.getElementsByClassName('link superlink');
console.log(link[0]); // zachowuje się jak tablica ale nie można nic wstrzykiwać, ale można się odnosić do elementów po indexie

var linkPoZnaczniku = document.getElementsByTagName('a');
console.log(linkPoZnaczniku);


var pierwszLink = document.querySelector('[href*="htpp://"]');
console.log(pierwszLink);


var wszystkieLinki = document.querySelectorAll('#parFirst [href]');
console.log(wszystkieLinki);


wszystkieLinki.forEach(function(element, index) {
    console.log(element.innerHTML);
});