if (localStorage.getItem('token') != null) {
    document.getElementsByTagName("main")[0].classList.add("d-none");
    document.getElementsByTagName("footer")[0].classList.add("d-none");
    location.href = "../usuario/usuario.html"
}

function openModal(title, desc) {
    document.getElementById("modal-globalLabel").innerHTML = title;
    document.getElementById("modal-globalAviso").innerHTML = desc;
    $("#modal-global").modal("show");
}

function logar() {

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
        if (login == element.email && senha == element.password) {
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
    if (login.length && senha.length) {
        if (login == userValid.email && senha == userValid.password) {
            location.href = "../usuario/usuario.html";

            let token = Math.random().toString(16).substring(2)
            localStorage.setItem('token', token)
            localStorage.setItem('userLogged', userValid.id);
        } else {
            openModal("Erro no Login", "Email ou senha incorretos!");
        }
    }
}