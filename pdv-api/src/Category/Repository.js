const database = require('../Database/Connection');

module.exports = {
    create: async (name) => {
        return (await database('categories').insert({ name })).toString();
    },

    getById: async (id) => {
        return database('categories')
            .where('id', id)
            .first();
    },

    getAll: async () => {
        return database('categories').select();
    },

    delete: async (id) => {
        return database('categories')
            .where('id', id)
            .del();
    }
}