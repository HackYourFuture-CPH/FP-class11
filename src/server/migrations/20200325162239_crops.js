exports.up = function(knex) {
  return knex.schema.createTable('crops', function(table) {
    table.increments();
    table.varchar('name', 255).notNullable();
    table.varchar('plant_variety', 255).notNullable();
    table
      .integer('fk_user_id')
      .unsigned()
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('deleted_at')
      .nullable()
      .defaultTo(null);
    table
      .foreign('fk_user_id')
      .references('id')
      .inTable('users');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('crops');
};
