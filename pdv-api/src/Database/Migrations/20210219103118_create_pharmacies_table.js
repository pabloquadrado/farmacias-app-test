exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('pharmacies', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.string('name').notNullable();
        tableBuilder
            .float('delivery_coverage')
            .notNullable()
            .defaultTo(0.00)
            .comment('Cobertura de entrega em metros');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pharmacies');
};
