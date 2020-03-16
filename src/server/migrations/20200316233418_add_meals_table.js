
exports.up = function (knex) {
  return knex.schema.createTable('meal', (table) => {
    table.increments('id').notNullable().unsigned().primary();
    table.string('title').notNullable();
    table.text('description').nullable();
    table.string('location').notNullable();
    table.timestamp('when').notNullable();
    table.integer('max_reservations').notNullable().unsigned();
    table.decimal('price', 19, 4).notNullable();
    table.timestamp('created_date').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meal');
};
