exports.up = function(knex) {
  return knex.schema.createTable('area_users', function(table) {
    table.increments('area_user_id').primary();
    table
      .integer('fk_area_id')
      .notNullable()
      .unsigned();
    table
      .integer('fk_user_id')
      .notNullable()
      .unsigned();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at');
    table
      .foreign('fk_area_id')
      .references('id')
      .inTable('areas');
    table
      .foreign('fk_user_id')
      .references('id')
      .inTable('users');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('area_users');
};
