exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: '1',
          uid: 'UrxxndVzhbekxxeIqA55eutt6yY2',
          name: 'Nalani Ingry',
          email: 'ningry0@csmonitor.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '2',
          uid: 'O3NdmXN2KgcGl6IjYqef2usfkNb2',
          name: 'Valaria Southeran',
          email: 'vsoutheran1@amazon.co.uk',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '3',
          uid: '1chmrflMmOVYF1yjzYfm5EyglJG3',
          name: 'Oralia Hallatt',
          email: 'ohallatt2@aboutads.info',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '4',
          uid: 'pOIBIJjFBhYrsvwxFYrVAPRBB3i1',
          name: 'Diane Woloschin',
          email: 'dwoloschin3@taobao.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '5',
          uid: 'zvB4oIn8r0PXHwQpqc2D5BodDuv1',
          name: 'Vasily Trenouth',
          email: 'vtrenouth4@vimeo.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
      ]);
    });
};
