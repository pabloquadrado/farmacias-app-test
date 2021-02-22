exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('products', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('category_id').unsigned().notNullable();
        tableBuilder.string('code').notNullable();
        tableBuilder.string('title').notNullable();
        tableBuilder.float('cost_price').notNullable().defaultTo(0.00);
        tableBuilder.float('price').notNullable().defaultTo(0.00);

        tableBuilder
            .foreign('category_id')
            .references('id')
            .inTable('categories');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
};