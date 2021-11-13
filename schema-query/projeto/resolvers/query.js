const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola() {
        return 'Bom dia!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
        id: 1,
        nome: "Rodrigo Tadeu",
        email: "rodrigotadeu@email.com",
        idade: 23,
        salario_real: 1234.56,
        vip: true
        }
    },
    produtoEmDestaque() {
        return {
        id: 1,
        nome: "Notebook",
        preco: 1234.56,
        desconto: 10
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(n => parseInt(Math.random()* 60 + 1)).sort(crescente)
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, args) {
        const selecionados = usuarios.filter(user => user.id == args.id)

        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null 
    }
}