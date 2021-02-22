const database = require('../Database/Connection');

module.exports = {
    create: async (pharmacy) => {
        return (await database('pharmacies').insert({
            name: pharmacy.name,
            delivery_coverage: pharmacy.delivery_coverage
        })).toString();
    },

    getById: async (id) => {
        return database('pharmacies')
            .select(
                'id',
                'name',
                'delivery_coverage'
            )
            .where('id', id)
            .first();
    },

    getAll: async () => {
        return database('pharmacies')
            .select(
                'id',
                'name',
                'delivery_coverage'
            );
    },

    delete: async (id) => {
        return database('pharmacies')
            .where('id', id)
            .del();
    }
}