exports.up = function(knex) {
  knex.schema.createTable('areaCropStages', function(table) {
    table.increments();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('areaCropStages');
};
