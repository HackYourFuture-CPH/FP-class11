exports.up = function(knex) {
  return knex.schema.createTable('batch_area_res_con', (table) => {
    table
      .increments('id')
      .notNullable()
      .primary();
    table
      .integer('fk_batch_area_id')
      .notNullable()
      .unsigned();
    table
      .integer('fk_material_id')
      .notNullable()
      .unsigned();
    table.float('quantity').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('created_at').notNullable();
    table.timestamp('deleted_at');
    table
      .foreign('fk_material_id')
      .references('id')
      .inTable('material');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('batch_area_res_con');
};
