function sair() {
 localStorage.removeItem('token')
 alert('Você deslogou com sucesso!');
 location.href = "../login/login.html";
}
