module.exports = {
    create: async (request, response, next) => {
        const requiredFields = [
            'product_id',
            'pharmacy_id',
            'price',
            'quantity'
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
                'message': 'Offer ID is required.'
            });
        }

        return next();
    }
}