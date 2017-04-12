function oblicz(event){
    event.preventDefault();
    
    //zmienne z kal
    var wplata = parseInt(document.getElementById('wplata').value);
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)/100;
    var podatek = document.getElementById('podatek').checked;
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById('wynik').innerHTML = wynik;


}

    
function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    
    if (podatek) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {/*musi byc else bo inaczej zwsze będzie true*/
        var oprocentowanieOpodatkowane = oprocentowanie;   
    }
    
    var kapital = wplata * Math.pow((1 + oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji );
    
    return kapital.toFixed(2);
}

//var kapatal = wplata
//
//
//   var kapatal = wplata + nawias
//   var nawias = 1 + 