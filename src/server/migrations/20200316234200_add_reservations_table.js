
exports.up = function (knex) {
  return knex.schema.createTable('reservation', (table) => {
    table.increments('id').notNullable().unsigned().primary();
    table.integer('number_of_guests').notNullable().unsigned();
    table.timestamp('created_date').notNullable();
    table.integer('meal_id').notNullable().unsigned();
    table.foreign('meal_id', 'fk_meal').references('id').inTable('meal').onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reservation');
};
