function loadObj(list = [], descending = false) {
    let tabela = document.getElementById("tabela_obj");
    let tabelaMeus = document.getElementById("tabela_obj_meus");
    function sortByDate(a, b) {
        const dateA = new Date(a.data).getTime();
        const dateB = new Date(b.data).getTime();
        let sortOrder = descending ? -1 : 1;

        if (dateA > dateB) {
            return sortOrder * -1;
        } else if (dateA < dateB) {
            return sortOrder * 1;
        } else {
            return 0;
        }
    }
    list.sort(sortByDate);
    list.forEach(element => {
        let redirect = () => {
            location.href = `../obj/obj.html?id=${element.id}`;
        }
        let linha;
        if (element.usuario == JSON.parse(localStorage.getItem("userLogged"))) {
            linha = tabelaMeus.insertRow();

        } else {
            linha = tabela.insertRow();
        }
        linha.onclick = redirect;
        linha.insertCell(0).innerHTML = element.nome;
        linha.insertCell(1).innerHTML = element.local;
        linha.insertCell(2).innerHTML = element.data;
        let categoria;
        switch (element.categoria) {
            case 1:
                categoria = "Acessório"
                break;
            case 2:
                categoria = "Documento"
                break;
            case 3:
                categoria = "Eletrônico"
                break;
            case 4:
                categoria = "Ferramenta"
                break;
            case 5:
                categoria = "Material Escolar"
                break;
            case 6:
                categoria = "Vestuário"
                break;
            case 7:
                categoria = "Outros"
                break;
        }
        linha.insertCell(3).innerHTML = categoria;
        linha.children[1].classList.add("ocultar-responsivo")
    });
}

function resetTableObj() {
    document.getElementById("tabela_obj").innerHTML = "";
    document.getElementById("tabela_obj_meus").innerHTML = "";
}

function searchObj() {
    let input = document.getElementById("inputSearch").value;
    let list_filter = [];
    list_filter = list_obj.filter((obj) => obj.nome.toLowerCase().includes(input.toLowerCase().trim()));
    resetTableObj();
    loadObj(list_filter);
}

function filterObj() {
    let sortValue = parseInt(document.getElementById("input-ordem").value);
    let descending = sortValue == 1 ? false : true;
    let categoryValue = document.getElementById("input-categoria").value;
    let listFilter = list_obj;
    if(categoryValue){
        listFilter = listFilter.filter((obj) => obj.categoria == categoryValue)
    }
    resetTableObj();
    loadObj(listFilter, descending);
}

function sortObj() {
    let sortValue = parseInt(document.getElementById("input-ordem").value);
    let descending = sortValue == 1 ? false : true;
    resetTableObj();
    loadObj(list_obj, descending);
}

function changeType(value, btn) {
    let buttons = document.getElementsByClassName("page-link");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) buttons[i].classList.remove("active");
    }
    btn.classList.add("active");

    let word = value === 1 ? "Perdidos" : "Encontrados";
    document.getElementById("title").innerHTML = "Objetos " + word;

    let list = JSON.parse(localStorage.getItem('@tib-objects'));
    list_obj = list.filter((obj) => obj.tipo == value);
    resetTableObj();
    loadObj(list_obj);
}

var list_obj = JSON.parse(localStorage.getItem('@tib-objects'));
list_obj = list_obj.filter((obj) => obj.tipo == 1);
window.onload = loadObj(list_obj);

let inputOrder = document.getElementById("input-ordem");
inputOrder.addEventListener("change", e => filterObj())
let inputCategory = document.getElementById("input-categoria");
inputCategory.addEventListener("change", e => filterObj())