let button = document.getElementById('button_register');

let list_obj = [];

button.addEventListener("click", function(e) {
    e.preventDefault()

    let list_obj = [];

    let name = document.getElementById('objname').value;
    let local = document.getElementById('objlocal').value;
    let date = document.getElementById('objdate').value;
    let description = document.getElementById('objdesc').value;

    let old_objects = JSON.parse(localStorage.getItem("@tib-objects"));

    if(old_objects) {
        old_objects.forEach((object) => {
            list_obj.push(object)
        });
    }

    let obj = {
        nome: name,
        local: local,
        data: date,
        descricao: description,
    }
    
    list_obj.push(obj)
    
    localStorage.setItem("@tib-objects", JSON.stringify(list_obj));
    alert("Objeto cadastrado com sucesso!")
})