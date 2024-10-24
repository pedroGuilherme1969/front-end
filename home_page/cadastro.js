async function loginForm() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(!email || password){
        alert("Preencha todos os campos")
        return
    }
}


async function cadastroUsuario(){
    const urlBaseApi = "http://127.0.0.1:8081"
    const url = "/user/save"; 

    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpf = document.getElementById('cpf').value
    let barber = document.getElementById('chk').checked

    if(!firstName || ! lastName ||!email || !password || !cpf){
        alert("Preencha todos os campos")
        return
    }
    
    let api = await fetch(urlBaseApi+url,{
        method:"POST",
        body:JSON.stringify(
            {
                 "firstName": firstName,
                 "lastName": lastName,
                 "email": email,
                 "password": password,
                 "cpf": cpf,
                 "barber": barber,
            }
        ),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        alert("Cadastro com sucesso")
        return 
    }
}

async function cadastroEmpresa() {
    const urlBaseApi = "http://127.0.0.1:8081";
    const url = "/enterprise/save";
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwordE").value;
    let cnpj = document.getElementById("cnpj").value;
  
    if (!name || !email || !password || !cnpj) {
      alert("Preencha todos os campos");
      return;
    }
  
    let api = await fetch(urlBaseApi + url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        cnpj: cnpj,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(api.ok){
        let resposta = await api.json();
        alert("Cadastro com sucesso")
        return 
    }
}

async function openForm(formId) {
    document.getElementById(formId).style.display = "block";
}

async function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

async function toggleRole() {
    var toggleText = document.getElementById('toggleText');
    var isChecked = document.getElementById('chk').checked;

    if (isChecked) {
        toggleText.textContent = 'Barbeiro';
    } else {
        toggleText.textContent = 'Cliente';
    }
}



async function openRegisterForm() {

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";
}

async function mascaraCPF(campo) {
    let cpf = campo.value;
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    campo.value = cpf;
}



async function openForm(formId) {
    document.getElementById(formId).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

async function closeForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("empresaForm").style.display = "none"; 
    document.getElementById("overlay").style.display = "none"; 
}

document.addEventListener("DOMContentLoaded", function () {
  // Exemplo de eventos para abrir os formulários
  document
    .querySelector(".btn.open-login").addEventListener("click", function () {openForm("loginForm");});

  document
    .querySelector(".btn.open-register").addEventListener("click", function () {openForm("registerForm");});

  document
    .querySelector(".btn.open-empresa").addEventListener("click", function () {openForm("empresaForm");});

  document.querySelectorAll(".btn.cancel").forEach(function (btn) {btn.addEventListener("click", closeForm);});
});

