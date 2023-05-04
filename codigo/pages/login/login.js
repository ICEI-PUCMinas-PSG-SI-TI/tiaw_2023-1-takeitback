function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if(login == "admin" && senha == "admin"){
        alert('Login efetuado com sucesso!');
        location.href = "../home/home.html";
    }else{
        alert('Usuário ou senha incorretos!');
    }

}