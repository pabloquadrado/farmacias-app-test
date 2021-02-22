const ProductRepository = require('./Repository');

module.exports = {
    create: async (request, response) => {
        try {

            const product = request.body;

            const productId = await ProductRepository.create(product);

            return response.json(await ProductRepository.getById(productId));
        } catch (error) {
            return response.status(400).json({ error: true, message: error.message });
        }
    },

    get: async (request, response) => {
        return response.json(await ProductRepository.getAll());
    },

    delete: async (request, response) => {
        const { id } = request.params;

        const deleted = await ProductRepository.delete(id);

        if (deleted) {
            return response.status(204).send();
        }

        return response.status(400).json({ error: true, message: 'Product not found.'});
    }
}