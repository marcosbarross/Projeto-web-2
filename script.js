var email = document.querySelector('#mail')
var password = document.querySelector('#pass')
var cnpj = document.querySelector('#cnpj')

//link não está funcionando no github
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
     else {
        window.open('/logged-pages/pagina-paciente.html')
     }
}

//precisa trocar o link
function validarloginmedico(){
    if (email.value.length == 0){
        window.alert('Preencha o campo de e-mail');
        document.querySelector('#mail').focus();
    }
    else if (email.value.indexOf('@') == -1 
    || email.value.indexOf('.') == -1 ){
        window.alert("Insira um e-mail válido!");
        document.querySelector('#mail').focus();
     }
     else {
        window.open('/logged-pages/pagina-paciente.html')
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

/* function maskcnpj(){
    const cnpjpre = cnpj.value
    const cnpjformatado = cnpjpre.replace(/\./g, '')

    let cnpjfinal;
        if (cnpjformatado){
            const part1 = cnpjformatado.slice(0,1);
            const part2 = cnpjformatado.slice(2,4);
            const part3 = cnpjformatado.slice(5,7);
            const part4 = cnpjformatado.slice(8,11);
            const part5 = cnpjformatado.slice(12,13);
            cnpjformatado = `${part1}.${part2}.${part3}/${part4}-${part5}`

            cnpj.value = cnpjfinal
        }
}
*/