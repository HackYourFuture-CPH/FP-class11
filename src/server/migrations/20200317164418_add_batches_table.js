exports.up = function(knex) {
  return knex.schema.createTable('batches', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.integer('fk_crop_id').notNullable();
    table.string('customer_name').notNullable();
    table
      .timestamp('seeding_date')
      .defaultTo(knex.fn.now())
      .notNullable();
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
      .foreign('fk_crop_id')
      .references('id')
      .inTable('crops');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('batches');
};
