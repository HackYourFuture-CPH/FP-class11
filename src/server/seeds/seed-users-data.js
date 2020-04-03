exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: '1',
          name: 'Nalani Ingry',
          email: 'ningry0@csmonitor.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: '2020-03-16 21:03:56',
          uid: 'UrxxndVzhbekxxeIqA55eutt6yY2',
        },
        {
          id: '2',
          name: 'Valaria Southeran',
          email: 'vsoutheran1@amazon.co.uk',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: '2020-03-16 21:03:56',
          uid: 'O3NdmXN2KgcGl6IjYqef2usfkNb2',
        },
        {
          id: '3',
          name: 'Oralia Hallatt',
          email: 'ohallatt2@aboutads.info',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: '2020-03-16 21:03:56',
          uid: '1chmrflMmOVYF1yjzYfm5EyglJG3',
        },
        {
          id: '4',
          name: 'Diane Woloschin',
          email: 'dwoloschin3@taobao.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: '2020-03-16 21:03:56',
          uid: 'pOIBIJjFBhYrsvwxFYrVAPRBB3i1',
        },
        {
          id: '5',
          name: 'Vasily Trenouth',
          email: 'vtrenouth4@vimeo.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: '2020-03-16 21:03:56',
          uid: 'zvB4oIn8r0PXHwQpqc2D5BodDuv1',
        },
      ]);
    });
};
