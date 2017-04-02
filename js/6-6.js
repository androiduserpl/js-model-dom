//document.getElementsByTagName('h1')[0]


var header = document.getElementsByTagName('h1')[0];

document.onkeydown = function(e) {
    

    switch(e.keyCode) {
        case 37: 
            header.style.color = "#00ff00";// left
        break;

        case 38:
            header.style.color = "#f00";// up
        break;

        case 39:
            header.style.color = "#00f";// right
        break;

        case 40:
            header.style.color = "#f0f";// down
        break;

        default: alert('nie wciśnięto klawisza arrow');
                header.style.color = "#77320e";// exit this handler for other keys
    }
    
}; 