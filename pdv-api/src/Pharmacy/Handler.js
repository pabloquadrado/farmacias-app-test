const PharmacyRepository = require('./Repository');
const AddressRepository = require('./Address/Repository');

module.exports = {
    create: async (request, response) => {
        try {

            const pharmacyId = await PharmacyRepository.create(request.body);

            const addressId = await AddressRepository.create(request.body.address, pharmacyId);

            let pharmacy = await PharmacyRepository.getById(pharmacyId);

            pharmacy.address = await AddressRepository.getById(addressId);

            return response.json(pharmacy);
        } catch (error) {
            return response.status(400).json({ error: true, message: error.message });
        }
    },

    get: async (request, response) => {
        const pharmacies = await PharmacyRepository.getAll();

        for (const index in pharmacies) {
            pharmacies[index].address = await AddressRepository.getByPharmacyId(pharmacies[index].id);
        }

        return response.json(pharmacies);
    },

    delete: async (request, response) => {
        const { id } = request.params;

        const addressDeleted = await AddressRepository.deleteByPharmacyId(id);

        if (!addressDeleted) {
            return response.status(400).json({ error: true, message: 'Pharmacy/Address not found.'});
        }

        const pharmacyDeleted = await PharmacyRepository.delete(id);

        if (!pharmacyDeleted) {
            return response.status(400).json({ error: true, message: 'Pharmacy not found.'});
        }

        return response.status(204).send();
    }
}