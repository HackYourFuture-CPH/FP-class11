exports.up = function(knex) {
  return knex.schema.createTable('batch_areas', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.integer('fk_batch_id').notNullable();
    table.integer('fk_area_id').notNullable();
    table.integer('number_of_pots').notNullable();
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
      .foreign('fk_batch_id')
      .references('id')
      .inTable('batches');
    table
      .foreign('fk_area_id')
      .references('id')
      .inTable('areas');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('batch_areas');
};
