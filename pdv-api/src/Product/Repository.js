const database = require('../Database/Connection');

module.exports = {
    create: async (product) => {
        return (await database('products').insert({
            category_id: product.category_id,
            code: product.code,
            title: product.title,
            cost_price: product.cost_price,
            price: product.price,
        })).toString();
    },

    getById: async (id) => {
        return database('products')
            .select(
                'products.*',
                'categories.name AS category_name'
            )
            .join('categories', 'categories.id', 'products.category_id')
            .where('products.id', id)
            .first();
    },

    getAll: async () => {
        return database('products')
            .select(
                'products.*',
                'categories.name AS category_name'
            )
            .join('categories', 'categories.id', 'products.category_id');
    },

    delete: async (id) => {
        return database('products')
            .where('id', id)
            .del();
    }
}