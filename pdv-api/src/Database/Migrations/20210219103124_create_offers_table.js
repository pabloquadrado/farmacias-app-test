exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('offers', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('product_id').unsigned().notNullable();
        tableBuilder.integer('pharmacy_id').unsigned().notNullable();
        tableBuilder.float('price').notNullable().defaultTo(0.00);
        tableBuilder.integer('quantity').notNullable().defaultTo(0);

        tableBuilder
            .foreign('product_id')
            .references('id')
            .inTable('products');

        tableBuilder
            .foreign('pharmacy_id')
            .references('id')
            .inTable('pharmacies');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('offers');
};