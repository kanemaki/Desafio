const db = require('../../config/db')

module.exports = {
    async usuarios() {
        return db('usuarios')
    },
    async usuario(_, { filtro }) {
        // implementar
    },
}