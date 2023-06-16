function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        {nome: "João da Silva", email: "joaosilva@gmail.com", }, 
                        {nome: "Maria das Graças", email: "mariagraças@gmail.com"}, 
                        {nome: "Pedro Gomes", email: "pedrogomes@gmail.com"} 
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById ('nome').value;
    let strEmail = document.getElementById ('email').value;
    let strmensagem = document.getElementById ('mensagem').value;
    let novoContato = {
        nome: strNome,
        email: strEmail,
        mensagem: strmensagem
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].email }    - ${objDados.contatos[i].mensagem }</p>`
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);
