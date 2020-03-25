exports.up = function(knex) {
  return knex.schema.createTable('user_roles', function(table) {
    table
      .increments('id')
      .notNullable()
      .primary();
    table
      .integer('fk_role_id')
      .unsigned()
      .notNullable();
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
    table.timestamp('deleted_at');
    table
      .foreign('fk_role_id', 'fk_role_id')
      .references('id')
      .inTable('roles');
    table
      .foreign('fk_user_id', 'fk_user_id')
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_roles');
};
