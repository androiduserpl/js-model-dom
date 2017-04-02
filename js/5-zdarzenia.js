//function nowaFunkcja () {
//    alert('Kliknołeś w paragraf@!');
//}

var parSecond = document.getElementById('parSecond');

function changeBackground() {
    parSecond.style.backgroundColor = "#00ff00";
}

function changeBackgroundDB() {
    parSecond.style.backgroundColor = "#f00";
}

parSecond.onclick = changeBackground;

parSecond.ondblclick = changeBackgroundDB;

parSecond.addEventListener('dblclick', changeBackgroundDB);
//
//parSecond.addEventListener('click', function(e) {
//   console.log(e); 
//});


document.getElementById('parFirst').children[3].addEventListener('click', function(e) {
    e.preventDefault();
   console.log(e.type); 
});

