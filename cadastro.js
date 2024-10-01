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
                 "barber": false
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
    const urlBaseApi = "http://127.0.0.1:8081"
    const url = "/enterprise/save";

    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cnpj = document.getElementById('cnpj').value

    if(!firstName || ! lastName ||!email || !password || !cnpj){
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
                 "cnpj": cnpj,
                 "barber": false
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

async function openForm(formId) {
    document.getElementById(formId).style.display = "block";
}

async function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

async function toggleRole() {
    var toggleText = document.getElementById("toggleText");
    var checkbox = document.getElementById("chk");

    if (checkbox.checked) {
        toggleText.textContent = "Barbeiro";
    } else {
        toggleText.textContent = "Cliente";
    }
}

async function openRegisterForm() {
    // Esconde o formulário de login
    document.getElementById("loginForm").style.display = "none";
    // Exibe o formulário de cadastro
    document.getElementById("registerForm").style.display = "block";
}

async function mascaraCPF(campo) {
    let cpf = campo.value;
    cpf = cpf.replace(/\D/g, ""); // Remove tudo que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    campo.value = cpf; // Atualiza o campo com a máscara
}



async function openForm(formId) {
    document.getElementById(formId).style.display = "block"; // Exibe o formulário correspondente
    document.getElementById("overlay").style.display = "block"; // Exibe a sobreposição
}

async function closeForm() {
    document.getElementById("loginForm").style.display = "none"; // Oculta o formulário de login
    document.getElementById("registerForm").style.display = "none"; // Oculta o formulário de cadastro
    document.getElementById("empresaForm").style.display = "none"; // Oculta o formulário da empresa
    document.getElementById("overlay").style.display = "none"; // Oculta a sobreposição
}

// Exemplo de eventos para abrir os formulários
document.querySelector(".btn.open-login").addEventListener("click", function() {
    openForm("loginForm");
});
document.querySelector(".btn.open-register").addEventListener("click", function() {
    openForm("registerForm");
});
document.querySelector(".btn.open-empresa").addEventListener("click", function() {
    openForm("empresaForm");
});

// Adicionando eventos para fechar o formulário
document.querySelectorAll(".btn.cancel").forEach(function(btn) {
    btn.addEventListener("click", closeForm);
});

