const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil')

module.exports = {
    async novoPerfil(_, { dados }) {
        try{
            const [ id ] = await db('perfis')
                .insert({ ...dados })
            return db('perfis')
                .where({ id }).first()    
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async excluirPerfil(_, { filtro }) {
        try{
            
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async alterarPerfil(_, { filtro, dados }) {
        try{
  
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    }
}