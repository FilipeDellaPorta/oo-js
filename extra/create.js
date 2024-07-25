function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibirInfos = function() {
      return `${this.nome}, ${this.email}`
    }
   }

function Admin(role) {
    User.call(this, 'Juliana', 'j@j.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const juliana = new Admin('admin')
console.log(juliana.exibirInfos())
console.log(juliana.role)