function buscarObj() {

    let list_obj = []

    list_obj = JSON.parse(localStorage.getItem('@tib-objects'))

    let tabela = '';
    list_obj.forEach(element => {
        let linha = `<tr><td>${element.nome}</td>
        <td>${element.local}</td>
        <td>${element.data}</td>
        <td>${element.descricao}</td></tr>`
        tabela += linha;
    });
    document.getElementById("tabela_obj").innerHTML = tabela;

}

window.onload = buscarObj();
