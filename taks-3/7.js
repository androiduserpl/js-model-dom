'use strict';

var lastCheckbox = document.getElementById('zgoda1-2');
var allCheckboxes =  document.querySelectorAll("input[type=checkbox]");

console.log(allCheckboxes);


// funkcja zmieniająca pozostałe chceck boksy

function checkboxState(state) {
    
    // literacja po tablicy checkboxów i zmiana ich stanu za wyjątkiem ostatniego
    
    for (var i = 0; i < allCheckboxes.length -1; i++){
        console.log(state);
        
        allCheckboxes[i].checked = state;
        allCheckboxes[i].disabled = state; // pozwala dezaktywaować checkboxy po zaznaczeniu boxa 3
    }
}

 //zmiana chceck wszystkie zgody 
lastCheckbox.onchange = function() {
    
    checkboxState(lastCheckbox.checked);
}

document.getElementById('wyslij').onclick = validateForm;


//validacja formularza
function validateForm(event) {
    
   
    
    var firstAgreement = document.getElementById('zgoda1');
    
    if (firstAgreement.checked == false ) {
         event.preventDefault();
        
        if ( firstAgreement.nextSibling.tagName != 'SPAN'){  ///zawsze tutaj znaczniki z dyżych liter
            
//        console.log('firstAgreement');
        
        var message = document.createElement('span');
        message.innerText = "To pole jest wymagane";
        message.style.color = "red";
        firstAgreement.parentNode.insertBefore(message, firstAgreement.nextSibling);
        /*document.getElementsByTagName('form')[0].appendChild(message); */
        }
    }     
}


///////

//function validateForm(event) {
//    
//   
//    
//    var firstAgreement = document.getElementById('zgoda1');
//    
//    if (firstAgreement.checked == false ) {
//         event.preventDefault();
//        
//        if ( firstAgreement.nextSibling.tagName != 'P'){  ///zawsze tutaj znaczniki z dyżych liter
//            
////        console.log('firstAgreement');
//        
//        var message = document.createElement('p');
//        message.innerText = "To pole jest wymagane";
//        message.style.color = "red";
//        firstAgreement.parentNode.insertBefore(message, firstAgreement.nextSibling);
//        /*document.getElementsByTagName('form')[0].appendChild(message); 
//        }
//    }     
//}





