const OfferRepository = require('./Repository');
const ProductRepository = require('../Product/Repository');
const PharmacyRepository = require('../Pharmacy/Repository');

module.exports = {
    create: async (request, response) => {
        try {

            const offerId = await OfferRepository.create(request.body);

            let offer = await OfferRepository.getById(offerId);

            offer.product = await ProductRepository.getById(request.body.product_id);
            offer.pharmacy = await PharmacyRepository.getById(request.body.pharmacy_id);

            return response.json(offer);
        } catch (error) {
            return response.status(400).json({ error: true, message: error.message });
        }
    },

    get: async (request, response) => {
        let offers = [];

        const databaseOffers = await OfferRepository.getAll();

        for (const offer of databaseOffers) {
            offers.push({
                id: offer.id,
                price: offer.price,
                quantity: offer.quantity,
                product: await ProductRepository.getById(offer.product_id),
                pharmacy: await PharmacyRepository.getById(offer.pharmacy_id)
            });
        }

        return response.json(offers);
    },

    delete: async (request, response) => {
        const { id } = request.params;

        const deleted = await OfferRepository.delete(id);

        if (deleted) {
            return response.status(204).send();
        }

        return response.status(400).json({ error: true, message: 'Offer not found.'});
    }
}