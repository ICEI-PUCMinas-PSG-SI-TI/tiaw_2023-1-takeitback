function loadObj(list = []) {
    let tabela = document.getElementById("tabela_obj");
    let tabelaMeus = document.getElementById("tabela_obj_meus");
    list.forEach(element => {
        let redirect = () => {
            location.href = `../obj/obj.html?id=${element.id}`;
        }
        let linha;
        if(element.usuario == JSON.parse(localStorage.getItem("userLogged"))){
            linha = tabelaMeus.insertRow();
            
        }else{
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
                categoria = "Ferramenta"
                break;
            case 4:
                categoria = "Material Escolar"
                break;
            case 5:
                categoria = "Vestuário"
                break;
            case 6:
                categoria = "Outros"
                break;
        }
        linha.insertCell(3).innerHTML = categoria;
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

function filterObj(value) {
    resetTableObj();
    loadObj(list_obj.filter((obj) => obj.categoria == value));
}

function changeType(value,btn){
    let buttons = document.getElementsByClassName("page-link");
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].classList.contains("active")) buttons[i].classList.remove("active");
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