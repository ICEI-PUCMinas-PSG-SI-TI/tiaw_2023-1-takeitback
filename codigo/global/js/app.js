$(document).ready(function() {
    if (localStorage.getItem('userLogged') == null) {
      openModal('Atenção', 'Você precisa estar logado para acessar essa página');
      let btnOk = document.getElementById("btn-ok");
      btnOk.addEventListener("click", e => location.href = "../login/login.html");
    }
  });
  
  function openModal(title, desc) {
    document.getElementById("modal-globalLabel").innerHTML = title;
    document.getElementById("modal-globalAviso").innerHTML = desc;
    $("#modal-global").modal("show");
  }