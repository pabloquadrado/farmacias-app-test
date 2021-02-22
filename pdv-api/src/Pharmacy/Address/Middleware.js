module.exports = {
    create: async (request, response, next) => {
        if (!request.body.address) {
            return response.status(400).json({
                'error': true,
                'message': 'Object Address is required.'
            });
        }

        const requiredFields = [
            'street',
            'district',
            'city',
            'state',
            'zip_code',
        ];

        for (const field of requiredFields) {
            if (!request.body.address[field]) {
                return response.status(400).json({
                    'error': true,
                    'message': `Field ${field} is required.`
                });
            }
        }

        return next();
    }
}