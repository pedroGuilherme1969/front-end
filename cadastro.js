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