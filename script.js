var email = document.querySelector('#mail')
var password = document.querySelector('#pass')
var cnpj = document.querySelector('#cnpj')

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
function validarcnpj(){
    if (cnpj.value.length == 0){
        window.alert("Preencha o campo do CNPJ!");
    }
    else if (cnpj.value.length != "14"){
        window.alert("Número de CNPJ inválido!");
    }
}