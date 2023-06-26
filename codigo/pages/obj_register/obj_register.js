function openModal(title, desc) {
    document.getElementById("modal-globalLabel").innerHTML = title;
    document.getElementById("modal-globalAviso").innerHTML = desc;
    $("#modal-global").modal("show");
}

function saveObj() {
    let list_obj = [];
    let old_objects = JSON.parse(localStorage.getItem("@tib-objects"));
    const id = Math.floor(Date.now() * Math.random());


    const fileImg = document.getElementById("file");
    if (fileImg) {
        if (fileImg.files.item(0).size <= 1000000) {
            let reader = new FileReader();
            reader.onload = (e) => {
                let listImg = (JSON.parse(localStorage.getItem("@tib-img")) || []);
                listImg.push({
                    id: id,
                    img: e.target.result
                })
                localStorage.setItem("@tib-img", JSON.stringify(listImg))
            }
            reader.readAsDataURL(fileImg.files[0]);
        }
    }

    if (old_objects) {
        old_objects.forEach((object) => {
            list_obj.push(object)
        });
    }
    let obj = {
        nome: document.getElementById('objname').value,
        local: document.getElementById('objlocal').value,
        data: document.getElementById('objdate').value,
        descricao: document.getElementById('objdesc').value,
        categoria: parseInt(document.getElementById('objcategory').value),
        id: id,
        tipo: type,
        usuario: JSON.parse(localStorage.getItem("userLogged")),
    }
    list_obj.push(obj);

    localStorage.setItem("@tib-objects", JSON.stringify(list_obj));
    openModal("Objeto Cadastrado", "Os dados foram salvos com sucesso.");
    form.reset();
}
function changeType(value, btn) {
    let buttons = document.getElementsByClassName("page-link");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) buttons[i].classList.remove("active");
    }
    btn.classList.add("active");

    let word = value === 1 ? "perdido" : "achado";
    document.getElementById("title").innerHTML = "Objeto " + word;
    document.getElementById("labelLocal").innerHTML = "Local onde foi " + word;
    document.getElementById("labelDate").innerHTML = "Data em que foi " + word;
    type = value;
}

function checkValidation(element) {
    if (element.id != "file") {
        element.className += " is-invalid";
    }
    function classValid() {
        element.classList.remove("is-invalid");
    }
    if (element.id == "objname" && element.value.length >= 3) {
        classValid();
        return true;
    }
    if (element.id == "objlocal" && element.value.length >= 3) {
        classValid();
        return true;
    }
    if (element.id == "objdate") {
        let date = new Date(element.value);
        if (!isNaN(date.getTime())) {
            classValid();
            return true;
        }
    }
    if (element.id == "objdesc" && element.value.length >= 5) {
        classValid();
        return true;
    }
}
let type = 1;

const inputs = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener("input", e => {
        element.classList.remove("is-invalid");
        checkValidation(element);
    });
});
let form = document.getElementById("form_obj");
form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    let contValid = 0;
    inputs.forEach(element => {
        if (checkValidation(element)) {
            contValid++;
        }
    })
    if (contValid == 4) {
        saveObj();
    }
});
