const AddressMiddleware = require('./Address/Middleware');

module.exports = {
    create: async (request, response, next) => {
        const requiredFields = [
            'name',
            'delivery_coverage',
        ];

        for (const field of requiredFields) {
            if (!request.body[field]) {
                return response.status(400).json({
                    'error': true,
                    'message': `Field ${field} is required.`
                });
            }
        }

        return await AddressMiddleware.create(request, response, next);
    },

    delete: async (request, response, next) => {
        if (!request.params.id) {
            return response.status(400).json({
                'error': true,
                'message': 'Pharmacy ID is required.'
            });
        }

        return next();
    }
}