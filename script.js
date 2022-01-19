var email = document.querySelector('#mail')
var password = document.querySelector('#pass')

function validar(){
    if (email.value.length == 0){
        window.alert('Preencha o campo de e-mail');
        document.querySelector('#mail').focus();
    }
    else if (email.value.indexOf('@') == -1 
    || email.value.indexOf('.') == -1 ){
        window.alert("Insira um e-mail válido!");
        document.querySelector('#mail').focus();
     }
}