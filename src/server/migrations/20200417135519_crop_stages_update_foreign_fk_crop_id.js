exports.up = function(knex) {
  return knex.schema.alterTable('crop_stages', (table) => {
    table.dropForeign('fk_crops_id');
    table.renameColumn('fk_crops_id', 'fk_crop_id');
    table
      .foreign('fk_crop_id')
      .references('id')
      .inTable('crops');
  });
};

exports.down = function(knex) {
  return knex.schema.table('crop_stages', function(table) {
    table.dropForeign('fk_crop_id');
    table.renameColumn('fk_crop_id', 'fk_crops_id');
    table
      .foreign('fk_crops_id')
      .references('id')
      .inTable('crops');
  });
};
