function carregarLogins() {
    
    let user1 = {email: "595812@sga.pucminas.br", password: "1234", name: "João Antônio", matricula: "119765", tel: "(31) 97563-6928", id: 1, tipo: 1,}
    let user2 = {email: "bruna.prof@sga.pucminas.br", password: "bruna", name: "Bruna Fernandes", matricula: "287498", tel: "(31) 99129-1303", id: 2,  tipo: 2,}
    let user3 = {email: "ademir.func@sga.pucminas.br", password: "ademir", name: "Ademir Rodrigues", matricula: "344381", tel: "(31) 98824-4459", id: 3, tipo: 3,}
    
    let listUsers = [user1, user2, user3];

    let old_users = JSON.parse(localStorage.getItem("@tib-users"));

    if(!old_users) {
        listUsers.push;
        localStorage.setItem("@tib-users", JSON.stringify(listUsers));
    }
}

function carregarObjetos() {

    let obj1 = {nome: "Caneta", local: "Bloco J Sala 101", data: "2023-06-05", descricao: "Caneta BIC de cor azul", categoria: 5, id: 264740712665, tipo: 1, usuario: 1,}
    let obj2 = {nome: "Carregador de notebook", local: "Bloco I Sala 301", data: "2023-05-20", descricao: "Carregador preto da marca DELL", categoria: 3, id: 376849023417, tipo: 1, usuario: 2,}
    let obj3 = {nome: "Carteira de Motorista", local: "Portaria", data: "2023-07-04", descricao: "Documento em nome de Ademir", categoria: 2, id: 164872530091, tipo: 1, usuario: 3,}
    
    let listObj = [obj1, obj2, obj3];

    let old_objects = JSON.parse(localStorage.getItem("@tib-objects"));

    if(!old_objects) {
        listObj.push;
        localStorage.setItem("@tib-objects", JSON.stringify(listObj));
    }
  }

  window.onload = carregarLogins(), carregarObjetos();