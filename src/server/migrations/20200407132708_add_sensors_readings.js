exports.up = function(knex) {
  return knex.schema.createTable('sensors_readings', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    table
      .integer('fk_batch_id')
      .notNullable()
      .unsigned();
    table
      .integer('fk_material_id')
      .notNullable()
      .unsigned();
    table.float('reading_value').notNullable();
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
      .foreign('fk_batch_id')
      .references('id')
      .inTable('batches');
    table
      .foreign('fk_material_id')
      .references('id')
      .inTable('materials');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sensors_readings');
};
