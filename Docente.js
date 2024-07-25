import User from './User.js'

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)//superClass
    }

    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}, responsável ${this.nome}.`
    }
}

const novoDocente = new Docente('Ana', 'a@a.com', '2024-01-01')
// console.log(novoDocente.aprovarEstudante('Juliana', 'Javascript'))