exports.up = function(knex) {
  return knex.schema.createTable('crop_stages', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned();
    table
      .enu('name', [
        'seeding',
        'propagation',
        'meturity',
        'harvesting',
        'delivery',
      ])
      .notNullable();
    table.integer('duration').notNullable();
    table
      .integer('fk_crops_id')
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
      .foreign('fk_crops_id')
      .references('id')
      .inTable('crops');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('crop_stages');
};
