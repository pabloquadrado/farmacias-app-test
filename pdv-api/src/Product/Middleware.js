module.exports = {
    create: async (request, response, next) => {
        const requiredFields = [
            'category_id',
            'code',
            'title',
            'cost_price',
            'price'
        ];

        for (const field of requiredFields) {
            if (!request.body[field]) {
                return response.status(400).json({
                    'error': true,
                    'message': `Field ${field} is required.`
                });
            }
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