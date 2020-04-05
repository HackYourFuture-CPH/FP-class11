exports.up = function (knex) {
  return knex.schema.alterTable('units', (table) => {
    table.timestamp('deleted_at').nullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('units', (table) => {
    // TODO: This migration does not work properly
    table
      .timestamp('deleted_at')
      .notNull()
      .defaultTo('2020-01-01 00:00:00')
      .alter();
  });
};
