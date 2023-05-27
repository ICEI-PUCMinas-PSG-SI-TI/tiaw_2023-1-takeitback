/**
 * Validar todos os campos do formulários de login a cada mudança de valor nos campos e adicionando suas classes CSS de validação
 * @param {*} element Elemento HTML 
 * @returns true para validação corretas
 */
function checkFields(element) {
    function filterPhone(value) {
        if (!value) return "";
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value;
    }
    function classValid() {
        element.classList.remove("is-invalid");
        element.className += " is-valid";
    }

    element.className += " is-invalid";

    if (element.id == "name" && element.value.length >= 3) {
        classValid();
        return true;
    }
    else if (element.id == "matricula" && element.value.length >= 4) {
        classValid();
        return true;
    }
    else if (element.id == "tipo" && element.value != "") {
        classValid();
        return true;
    }
    else if (element.id == "tel") {
        element.value = filterPhone(element.value);
        if (element.value.length == 15) {
            classValid();
            return true;
        }
    }
    else if (element.id == "email" && (element.value.includes("@sga.pucminas.br") && element.value.length >= 17)) {
        let split = element.value.split("@sga.pucminas.br");
        if (!split[1]) {
            classValid();
            return true;
        }
    }
    else if (element.id == "password") {
        if (element.value.length >= 4) {
            classValid();
            return true;
        }
    }
    else if (element.id == "okPassword" && (element.value != "" && element.value == document.getElementById("password").value)) {
        classValid();
        return true;
    }
}
function storeUser() {
    const name = document.getElementById("name").value.trim();
    const matricula = document.getElementById("matricula").value;
    const tipo = parseInt(document.getElementById("tipo").value);
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value.replace(/\s/g, "");
    const password = document.getElementById("password").value;

    const listUsers = (JSON.parse(localStorage.getItem("@tib-users")) || []);

    let isInvalid = false;

    if (listUsers.length) {
        listUsers.forEach(user => {
            if (user.matricula === matricula) {
                isInvalid = true;
                document.getElementById("modal-registerLabel").innerHTML = "Erro no Cadastro";
                document.getElementById("modal-aviso").innerHTML = "Esta matricula já está registrada.";
                $("#modal-register").modal("show");
            } if (user.email === email) {
                isInvalid = true;
                document.getElementById("modal-registerLabel").innerHTML = "Erro no Cadastro";
                document.getElementById("modal-aviso").innerHTML = "Este e-mail já está registrado.";
                $("#modal-register").modal("show");
            }
        })
        if (!isInvalid) {
            listUsers.push({
                id: listUsers.length + 1,
                name: name,
                matricula: matricula,
                tipo: tipo,
                tel: tel,
                email: email,
                password: password
            })
            localStorage.setItem("@tib-users", JSON.stringify(listUsers));
            document.getElementById("modal-registerLabel").innerHTML = "Cadastro Concluído";
            document.getElementById("modal-aviso").innerHTML = "Sua conta foi registrada, Agora você acessar sua conta com seu e-mail e senha.";
            document.getElementById("btn-continuar").classList.remove("d-none");
            document.getElementById("btn-ok").classList.add("d-none");
            $("#modal-register").modal("show");
        }
    } else {
        listUsers.push({
            id: 1,
            name: name,
            matricula: matricula,
            tipo: tipo,
            tel: tel,
            email: email,
            password: password
        })
        localStorage.setItem("@tib-users", JSON.stringify(listUsers));
        document.getElementById("modal-registerLabel").innerHTML = "Cadastro Concluído";
        document.getElementById("modal-aviso").innerHTML = "Sua conta foi registrada, Agora você acessar sua conta com seu e-mail e senha.";
        document.getElementById("btn-continuar").classList.remove("d-none");
        document.getElementById("btn-ok").classList.add("d-none");
        $("#modal-register").modal("show");
    }

}
const form = document.getElementById("form-register");
const fields = document.querySelectorAll(".required");
fields.forEach(element => {
    element.addEventListener("input", e => {
        element.classList.remove("is-invalid");
        checkFields(element);
    });
})
form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    let contValid = 0;
    fields.forEach(element => {
        if (checkFields(element)) {
            contValid++;
        }
    })
    if (contValid == 7) {
        storeUser();
    }
})


