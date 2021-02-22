const database = require('../../Database/Connection');

module.exports = {
    create: async (address, pharmacyId) => {
        let fieldsToPersist = {
            pharmacy_id: pharmacyId,
            street: address.street,
            district: address.district,
            city: address.city,
            state: address.state,
            zip_code: address.zip_code,
        };

        if (address.number) {
            fieldsToPersist.number = address.number;
        }

        if (address.complement) {
            fieldsToPersist.complement = address.complement;
        }

        return (await database('addresses').insert(fieldsToPersist)).toString();
    },

    getById: async (id) => {
        return database('addresses')
            .select(
                'id',
                'street',
                'number',
                'complement',
                'district',
                'city',
                'state',
                'zip_code'
            )
            .where('id', id)
            .first();
    },

    getByPharmacyId: async (pharmacyId) => {
        return database('addresses')
            .select(
                'id',
                'street',
                'number',
                'complement',
                'district',
                'city',
                'state',
                'zip_code'
            )
            .where('pharmacy_id', pharmacyId)
            .first();
    },

    deleteByPharmacyId: async (pharmacyId) => {
        return database('addresses')
            .where('pharmacy_id', pharmacyId)
            .del();
    }
}