function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if(login == "admin" && senha == "admin"){
        alert('Login efetuado com sucesso!');
        location.href = "../usuario/usuario.html";
    }else{
        alert('Usuário ou senha incorretos!');
    }

}