import User from './User.js'

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)//superClass
    }

    // exibirInfos() {
    //     const infos = super.exibirInfos()
    //     return `admin - ${infos}`
    // }

    criarCurso(nomeDoCurso, qtdVagas) {
        return `curso ${nomeDoCurso} criado com ${qtdVagas} vagas.`
    }

}

