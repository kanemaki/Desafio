const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil')

module.exports = {
    async novoUsuario(_, { dados }) {
        try{
            const [ id ] = await db('perfis')
                .insert({ ...dados })
            return db('perfis')
                .where({ id }).first()    
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async excluirUsuario(_, { filtro }) {
        // Implementar
    },
    async alterarUsuario(_, { filtro, dados }) {
        // Implementar
    }
}