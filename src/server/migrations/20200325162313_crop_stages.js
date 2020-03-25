exports.up = function(knex) {
  return knex.schema.createTable('crop_stages', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.enu('name', []).notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('crop_stages');
};
