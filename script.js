var email = document.querySelector('#mail')
var password = document.querySelector('#pass')
var cnpj = document.querySelector('#cnpj')
var med = document.querySelector('.medlist')
var gab = document.getElementById('gabrielwilson')
var gio = document.getElementById('giovanna')
var man = document.getElementById('manoel')
var hiddenbutton = document.getElementById("#hiddenbutton")

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
            window.open(`../logged-pages/pagina-paciente.html`)
            hiddenbutton.innerHTML = `<a href="../logged-pages/pagina-paciente.html">Entrar</a>`
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

/*function validarmed(){
    var logmed = querySelector('.medbutton')
    if(med.value == 'gio'){
        window.alert('ta funcionando')
        /*document.querySelector('.medbutton').innerHTML = <a href="../med-page/gio.html" class="medbutton"><button type="submit" id="login-button" onclick="validarmed()">Entrar</button></a>*/


//script gabriel
function gabchoose(){
    gab.style.background = 'rgb(78, 112, 224)';
    if (password.value.length > 0){
        window.open("../med-page/gabriel.html")
    }
    else{
        window.alert('insira a senha!')
        gab.style.background = 'rgb(182, 182, 245)';
    }
}

//--------------------------------------------------

//script giovanna
function giochoose(){
    gio.style.background = 'rgb(78, 112, 224)';
    if (password.value.length > 0){
        window.open("../med-page/gio.html")
    }
    else{
        window.alert('insira a senha!')
        gio.style.background = 'rgb(182, 182, 245)';
    }
}

//-------------------------------------------------

//script manoel
function manchoose(){
    man.style.background = 'rgb(78, 112, 224)';
    if (password.value.length > 0){
        window.open("../med-page/manoel.html")
    }
    else{
        window.alert('insira a senha!')
        man.style.background = 'rgb(182, 182, 245)';
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