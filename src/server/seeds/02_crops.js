exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('crops')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('crops').insert([
        { name: 'potato', fk_user_id: '1', plant_variety: 'veg' },
        { name: 'Phaliyaan', fk_user_id: '1', plant_variety: 'beens' },
        { name: 'Teenda', fk_user_id: '1', plant_variety: 'veg' },
        { name: 'Kadu', fk_user_id: '1', plant_variety: 'veg' },
        { name: 'Bhindi', fk_user_id: '1', plant_variety: 'veg' },
      ]);
    });
};
