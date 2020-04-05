exports.up = function(knex) {
  return knex.schema.createTable('materials', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('name', 255).notNullable();
    table
      .integer('fk_unit_id')
      .notNullable()
      .unsigned();
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
      .defaultTo(null)
      .nullable();
    table
      .foreign('fk_unit_id')
      .references('id')
      .inTable('units');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('materials');
};
