/* ID'S
 * #img-obj - <img> imagem do objeto
 * #tipo-obj - <span> tipo de objeto
 * #categoria-obj - <span> categoria do objeto
 * #nome-obj - <h3> nome do objeto
 * #date-obj - <span> data do objeto
 * #local-obj - <span> data do objeto
 * #desc-obj - <p> descrição do objeto
 * 
 * #img-user - <img> imagem do usuário responsável por criar objeto
 * #icone-user - <i> ícone padrão quando não tiver foto
 * #nome-user - <span> nome do usuário responsável por criar objeto
 * #email-user - <span> email do usuário  responsável por criar objeto
 * #tel-user - <span> telefone do usuário  responsável por criar objeto
 * #tipo-user - <span> tipo de usuário  responsável por criar objeto
 * #estado-user - <span> estado do usuário  responsável por criar objeto
 * #cidade-user - <span> cidade do usuário  responsável por criar objeto
 * #bairro-user - <span> bairro do usuário  responsável por criar objeto
 * 
 * #btn-delete - <button> botão de deletar objeto
 */

function deleteObj() {
    let indiceObj = listObj.findIndex(function (objeto) {
        return objeto.id == idObj;
    });
    let indiceImg = listImg.findIndex(function (objeto) {
        return objeto.id == idObj;
    });

    // Remova o objeto com o índice encontrado
    if (indiceImg !== -1) {
        listImg.splice(indiceImg, 1);
        localStorage.setItem("@tib-objects", JSON.stringify(listImg));
    }
    if (indiceObj !== -1) {
        listObj.splice(indiceObj, 1);
        localStorage.setItem("@tib-objects", JSON.stringify(listObj));
        window.location.href = "../obj_list/lista.html"
    }
}

function loadInfos() {
    let idUserObj;
    listImg.forEach(objeto => {
        if (objeto.id == idObj) {
            document.getElementById('img-obj').src = objeto.img;
        }
    });
    listObj.forEach(objeto => {
        if (objeto.id == idObj) {
            let tipo;
            let categoria;

            idUserObj = objeto.usuario;

            switch (objeto.tipo) {
                case 1:
                    tipo = "Objeto Perdido";
                    break;
                case 2:
                    tipo = "Objeto Encontrado";
                    break;
            }
            document.getElementById('tipo-obj').textContent = tipo;

            switch (objeto.categoria) {
                case 1:
                    categoria = "Acessório";
                    break;
                case 2:
                    categoria = "Documento";
                    break;
                case 3:
                    categoria = "Eletrônico";
                    break;
                case 4:
                    categoria = "Ferramenta";
                    break;
                case 5:
                    categoria = "Material Escolar";
                    break;
                case 6:
                    categoria = "Vestuário";
                    break;
                case 7:
                    categoria = "Outros";
                    break;
            }
            document.getElementById('categoria-obj').textContent = categoria;

            document.getElementById('nome-obj').textContent = objeto.nome;
            document.getElementById('date-obj').textContent = objeto.data;
            document.getElementById('local-obj').textContent = objeto.local;
            document.getElementById('desc-obj').textContent = objeto.descricao;

            if (objeto.usuario != idUserLogged) {
                inputDelete.classList.add("d-none");
            }
        }
    });
    listUsers.forEach(objeto => {
        if (objeto.id == idUserObj) {
            let tipo;

            if (objeto.imgData) {
                document.getElementById('img-user').src = objeto.imgData;
                inputImgUser.src = objeto.imgData;
                inputIconUser.classList.add("d-none");
                inputImgUser.classList.remove("d-none");
            }
            document.getElementById('nome-user').textContent = objeto.name;
            document.getElementById('nome-user1').textContent = objeto.name;
            document.getElementById('email-user').textContent = objeto.email;
            document.getElementById('tel-user').textContent = objeto.tel;

            switch (+objeto.tipo) {
                case 1:
                    tipo = "Aluno";
                    break;
                case 2:
                    tipo = "Professor";
                    break;
                case 3:
                    tipo = "Funcionário";
                    break;
            }
            console.log(tipo)
            document.getElementById('tipo-user').textContent = tipo;

            document.getElementById('estado-user').textContent = objeto.estado;
            document.getElementById('cidade-user').textContent = objeto.cidade;
            document.getElementById('bairro-user').textContent = objeto.bairro;
        }
    });
}

const urlParams = new URLSearchParams(window.location.search);
const idObj = urlParams.get("id") // pega id do objeto selecionado

const idUserLogged = JSON.parse(localStorage.getItem("userLogged"));

//Pega lista do localStorage
const listUsers = (JSON.parse(localStorage.getItem("@tib-users")) || []);
const listObj = (JSON.parse(localStorage.getItem("@tib-objects")) || []);
const listImg = (JSON.parse(localStorage.getItem("@tib-img")) || []);

// Inputs
const inputDelete = document.getElementById("btn-delete");
const inputIconUser = document.getElementById("icone-user");
const inputImgUser = document.getElementById("img-user");

loadInfos();