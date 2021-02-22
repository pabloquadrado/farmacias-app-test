
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('addresses', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('pharmacy_id').unsigned().notNullable();
        tableBuilder.string('street').notNullable();
        tableBuilder.integer('number').nullable();
        tableBuilder.string('complement').nullable();
        tableBuilder.string('district').notNullable().comment('Bairro');
        tableBuilder.string('city').notNullable();
        tableBuilder.string('state').notNullable();
        tableBuilder.string('zip_code').notNullable();

        tableBuilder
            .foreign('pharmacy_id')
            .references('id')
            .inTable('pharmacies');
    });
};

exports.down = function(knex) {
  
};
