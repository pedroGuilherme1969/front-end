async function deletaUsuario() {
    const urlBaseApi = "http://127.0.0.1:8081";
    let id = document.getElementById('id').value;
    const url = `/user/dell/${id}`;

    try {
        let response = await fetch(urlBaseApi + url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('Deletado: ' + id);
        } else {
            let errorMessage;

            if (response.status === 404) {
                errorMessage = 'Usuário não encontrado.';
            } else if (response.status === 400) {
                errorMessage = 'Requisição inválida.';
            } else if (response.status === 500) {
                errorMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
            } else {
                errorMessage = 'Erro desconhecido: ' + response.status;
            }

            alert(errorMessage);
        }
    } catch (error) {
        alert('Erro na conexão: ' + error.message);
    }
}
