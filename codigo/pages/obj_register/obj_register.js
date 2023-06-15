let button = document.getElementById('button_register');
button.onclick = objregister();

function objregister() {
    let name = document.getElementById('objname').value;
    let local = document.getElementById('objlocal').value;
    let date = document.getElementById('objdate').value;
    let description = document.getElementById('objdesc').value;

    let listobj = {
        name: name,
        local: local,
        data: date,
        descricao: description
    }
    
    localStorage.setItem("@tib-objects", JSON.stringify(listobj));
}