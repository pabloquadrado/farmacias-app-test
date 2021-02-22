module.exports = {
    create: async (request, response, next) => {
        if (!request.body.name) {
            return response.status(400).json({
                'error': true,
                'message': 'Category name is required.'
            });
        }

        return next();
    },

    delete: async (request, response, next) => {
        if (!request.params.id) {
            return response.status(400).json({
                'error': true,
                'message': 'Category ID is required.'
            });
        }

        return next();
    }
}