const database = require('../Database/Connection');

module.exports = {
    create: async (offer) => {
        return (await database('offers').insert({
            product_id: offer.product_id,
            pharmacy_id: offer.pharmacy_id,
            price: offer.price,
            quantity: offer.quantity
        })).toString();
    },

    getById: async (id) => {
        return database('offers')
            .select(
                'price',
                'quantity'
            )
            .where('id', id)
            .first();
    },

    getAll: async () => {
        return database('offers')
            .select(
                'id',
                'product_id',
                'pharmacy_id',
                'price',
                'quantity'
            );
    },

    delete: async (id) => {
        return database('offers')
            .where('id', id)
            .del();
    }
}