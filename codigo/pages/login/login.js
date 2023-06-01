if (localStorage.getItem('token') != null) {
    location.href = "../usuario/usuario.html"
}

function logar(){

    let login = document.getElementById('login').value;
    let senha = document.getElementById('password').value;

    let listUsers = []
    
    let userValid = {
        email: '',
        password: '',
        name: '',
        matricula: '',
        tel: '',
        id: '',
        tipo: ''
    }

    listUsers = JSON.parse(localStorage.getItem('@tib-users'))

    listUsers.forEach(element => {
        if(login == element.email && senha == element.password) {
            userValid = {
                email: element.email,
                password: element.password,
                name: element.name,
                matricula: element.matricula,
                tel: element.tel,
                id: element.id,
                tipo: element.tipo 
            }
        } 
    });

    if(login == userValid.email && senha == userValid.password){
        alert('Login efetuado com sucesso!');
        location.href = "../usuario/usuario.html";

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
    } else {
        alert('Usuário ou senha incorretos!');
    }
}