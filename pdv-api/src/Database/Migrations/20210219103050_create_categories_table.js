exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('categories', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.string('name').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories');
};
