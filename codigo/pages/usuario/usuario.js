function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogged');
    location.href = "../login/login.html";
}
/**
     * Recebe um valor e transforma no formato padrão de telefone.
     * @param {string} value 
     * 
     */
function filterPhone(value) {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    document.getElementById("inputTelefone").value = value;
}
/**
 * Recebe titulo e descrição para adicionar no modal e exibir na tela.
 * @param {string} title 
 * @param {string} desc 
 */
function openModal(title, desc) {
    document.getElementById("modal-globalLabel").innerHTML = title;
    document.getElementById("modal-globalAviso").innerHTML = desc;
    $("#modal-global").modal("show");
}
/**
 * Pega valor de um input do tipo imagem transforma em arquivo e adiciona ao um elemento de imagem para exibição.
 */
function imageView() {
    const fileImg = document.getElementById("inputFile");
    let imageResult = document.getElementById("imageResult");
    let reader = new FileReader();
    reader.onload = () => {
        imageResult.src = reader.result;
    }
    reader.readAsDataURL(fileImg.files[0]);
}
/**
 * Carrega todas informações da lista de usuário do usuário logado e adiciona nos inputs correspondentes.
 */
function loadInfos() {
    listUsers.forEach(user => {
        if (userSelected.id === user.id) {
            userSelected = {
                ...userSelected,
                email: user.email,
                password: user.password,
                name: user.name,
                matricula: user.matricula,
                tel: user.tel,
                id: user.id,
                tipo: user.tipo,
                password: user.password,
                nascimento: user.nascimento,
                genero: user.genero,
                cep: user.cep,
                estado: user.estado,
                cidade: user.cidade,
                bairro: user.bairro,
                rua: user.rua,
                imgData: user.imgData
            }
        }
    })

    imageResult.src = userSelected.imgData  || "";

    inputNome.value = userSelected.name;
    inputMatricula.value = userSelected.matricula;
    inputTipo.value = userSelected.tipo;
    inputTel.value = userSelected.tel;
    inputEmail.value = userSelected.email;

    inputNascimento.value = userSelected.nascimento || "";
    inputGenero.value = userSelected.genero || "";
    inputCep.value = userSelected.cep || "";
    inputEstado.value = userSelected.estado || "";
    inputCidade.value = userSelected.cidade || "";
    inputBairro.value = userSelected.bairro || "";
    inputRua.value = userSelected.rua || "";

}
/**
 * Faz a validação dos campos de informações do usuários e retorna a validação.
 * @returns boolean
 */
function checkFields() {

    if (inputNome.value.length < 3) {
        openModal("Erro na Alteração", "Digite um nome com no mínimo 3 caracteres");
        return false;
    }
    if (inputNascimento.value.length) {
        console.log(inputNascimento.value)
        let date = new Date(inputNascimento.value);
        if (date.getFullYear() < 1900 || date.getFullYear() >= new Date(Date.now()).getFullYear()) {
            openModal("Erro na Alteração", "Data Inválida");
            return false;
        }
        if (isNaN(date.getTime())) {
            openModal("Erro na Alteração", "Data Inválida");
            return false;
        }
    }
    if (inputTel.value.length < 15) {
        openModal("Erro na Alteração", "Telefone Inválido");
        return false;
    }
    if (inputCep.value.length) {
        if (inputCep.value.length !== 8) {
            openModal("Erro na Alteração", "Digite um CEP valido.");
            return false;
        }
    }
    if (inputEstado.value.length || inputCidade.value.length) {
        if (!inputEstado.value.length) {
            openModal("Erro na Alteração", "Selecione um Estado");
            return false;
        }
        if (inputCidade.value.length < 2) {
            openModal("Erro na Alteração", "Digite uma cidade com no mínimo 2 caracteres");
            return false;
        }
    }
    if (inputBairro.value.length) {
        if (inputBairro.value.length < 2) {
            openModal("Erro na Alteração", "Digite um bairro com no mínimo 2 caracteres");
            return false;
        }
    }
    if (inputRua.value.length) {
        if (inputRua.value.length < 1) {
            openModal("Erro na Alteração", "Digite uma Rua com no mínimo 1 caracteres");
            return false;
        }
    }

    return true;
}
/**
 * Pega as informações dos campos correspondentes e salva em localStorage.
 */
function saveChanges() {
    if (checkFields()) {
        userSelected = {
            ...userSelected,
            name: inputNome.value,
            matricula: inputMatricula.value,
            tipo: inputTipo.value,
            tel: inputTel.value,
            email: inputEmail.value,
            nascimento: inputNascimento.value,
            genero: inputGenero.value,
            cep: inputCep.value,
            estado: inputEstado.value,
            cidade: inputCidade.value,
            bairro: inputBairro.value,
            rua: inputRua.value,
            imgData: imageResult.getAttribute("src")
        }
        listUsers.forEach((user, i, array) => {
            if (userSelected.id === user.id) {
                array[i] = userSelected;
            }
        })
        console.log(userSelected);
        console.log(listUsers);
        localStorage.setItem("@tib-users", JSON.stringify(listUsers));
        openModal("Sucesso na Alteração", "Suas mudanças foram salvas.");
    }
}

function getAddress(cep){
    const apiURL = `https://viacep.com.br/ws/${cep}/json/`
    fetch(apiURL).then(response => {
        response.json().then((data)=>{
            inputEstado.value = data.uf;
            inputCidade.value = data.localidade;
            inputBairro.value =  data.bairro;
            inputRua.value =  data.logradouro; 
        })
    }) 
}

//Exportando LocalStorage
const listUsers = (JSON.parse(localStorage.getItem("@tib-users")) || []);
let userSelected = {
    id: JSON.parse(localStorage.getItem("userLogged")),
    name: "",
    matricula: "",
    tipo: "",
    tel: "",
    email: "",
    password: "",
    nascimento: "",
    genero: "",
    estado: "",
    cidade: "",
    bairro: "",
    imgData: null
};

//Carregando Inputs
let imageResult = document.getElementById("imageResult");

let inputNome = document.getElementById("inputNome");
let inputMatricula = document.getElementById("inputMatricula");
let inputTipo = document.getElementById("inputTipo");
let inputTel = document.getElementById("inputTelefone");
let inputEmail = document.getElementById("inputEmail");

let inputNascimento = document.getElementById("inputNascimento");
let inputGenero = document.getElementById("inputGenero");
let inputEstado = document.getElementById("inputEstado");
let inputCidade = document.getElementById("inputCidade");
let inputBairro = document.getElementById("inputBairro");
let inputCep = document.getElementById("inputCep");
let inputRua = document.getElementById("inputRua");

//Carregando Informações
loadInfos();

//Carregando Endereço
inputCep.addEventListener("keyup", event =>{
    if(inputCep.value.length === 8){
        getAddress(inputCep.value);
    }
})

//Salvando Informações no LocalStorage
let btnSalvar = document.getElementById("btn-salvar");
btnSalvar.addEventListener("click", saveChanges);

