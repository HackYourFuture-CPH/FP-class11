
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crop_stages').del()
    .then(function () {
      // Inserts seed entries
      return knex('crop_stages').insert([
        {name: 'seeding',duration:'3',fk_crops_id:'251'},
        {name: 'propagation',duration:'14',fk_crops_id:'251'},
        {name: 'meturity',duration:'28',fk_crops_id:'251'},
        {name: 'harvesting',duration:'3',fk_crops_id:'251'},
        {name: 'delivery',duration:'4',fk_crops_id:'251'}
      ]);
    });
};
