const CategoryRepository = require('./Repository');

module.exports = {
    create: async (request, response) => {
        const { name } = request.body;

        const categoryId = await CategoryRepository.create(name);

        return response.json(await CategoryRepository.getById(categoryId));
    },

    get: async (request, response) => {
        return response.json(await CategoryRepository.getAll());
    },

    delete: async (request, response) => {
        const { id } = request.params;

        const deleted = await CategoryRepository.delete(id);

        if (deleted) {
            return response.status(204).send();
        }

        return response.status(400).json({ error: true, message: 'Category not found.'});
    }
}