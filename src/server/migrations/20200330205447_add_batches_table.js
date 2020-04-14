exports.up = function(knex) {
  return knex.schema.createTable('batches', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    table
      .integer('fk_crop_id')
      .notNullable()
      .unsigned();
    table
      .integer('fk_user_id')
      .notNullable()
      .unsigned();
    table.string('customer_name').notNullable();
    table.integer('number_of_seeded_pots').notNullable();
    table
      .timestamp('seeding_date')
      .defaultTo(knex.fn.now())
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
      .foreign('fk_crop_id')
      .references('id')
      .inTable('crops');
    table
      .foreign('fk_user_id')
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('batches');
};
