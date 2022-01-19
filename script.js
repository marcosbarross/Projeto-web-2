var email = document.querySelector('#mail')

function validar(){
    if (email.value.length == 0){
        window.alert('Preencha o campo de e-mail');
    }
}