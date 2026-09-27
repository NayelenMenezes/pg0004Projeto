document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();

    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagem-erro');

    const adminEmail = "admin@reescreva.com";
    const adminSenha = "123456";

    if(emailDigitado === adminEmail && senhaDigitada === adminSenha) {
        window.location.href = "admin.html";
    } else {
        mensagemErro.textContent = "E-mail ou senha incorretos";
    }
});