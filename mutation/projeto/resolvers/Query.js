const { usuarios, perfis } = require('../data/db')

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, { filtro }) {
        // const sels = usuarios
        //     .filter(u => u.id === id)
        const i = indiceUsuario(filtro);
        if(i < 0) return null
        // return sels ? sels[0] : null
        return usuarios[i]
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