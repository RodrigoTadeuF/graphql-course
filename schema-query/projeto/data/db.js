const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]
  
const usuarios = [{
    id: 1,
    nome: 'Joao Silva',
    email: 'jsilva@mail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@mail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismith@mail.com',
    idade: 31,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }