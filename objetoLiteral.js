//herança de prtótipos é como o javascript lida com a orientação a objetos
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

exibir = function () {
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user)
exibirNome()