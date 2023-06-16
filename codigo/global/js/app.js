if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página');
    location.href = "../login/login.html"
}