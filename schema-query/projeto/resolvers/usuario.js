const { perfis } = require('../data/db');

module.exports = {
    salario(usuario) {
        return usuario.salario_real
      },
      perfil(usuario) {
        const filtrado = perfis.filter(perfil => perfil.id === usuario.id)
        return filtrado ? filtrado[0] : null
      }
}