
exports.up = function (knex) {
  return knex.schema.createTable('review', (table) => {
    table.increments('id').notNullable().unsigned().primary();
    table.string('title').notNullable();
    table.text('description').nullable();
    table.integer('meal_id').notNullable().unsigned();
    table.integer('stars').notNullable().unsigned();
    table.timestamp('created_date').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('review');
};
