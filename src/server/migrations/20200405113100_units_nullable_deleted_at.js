exports.up = function(knex) {
  return knex.schema.alterTable('units', (table) => {
    table
      .timestamp('deleted_at')
      .nullable()
      .alter();
  });
};

exports.down = function(knex) {
  // Bypass down migration.
  // If we set .notNullable() we will need to also set default
  // value which I can't get to work. Don't think it is worth
  // bothering with getting the table set back to .notNullable
  // on migrate down as it is unlikely to cause any problems.
  return knex;
};
