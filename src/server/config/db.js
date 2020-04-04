const winston = require('../api/lib/utils/winston').logger;

// db setup
const dbOptions = require('../knexfile').development;

// create connection
const knex = require('knex')(dbOptions);

knex.raw('SELECT VERSION()').then(() => {
  winston.info(
    ` connection to ${dbOptions.connection.database} db successful!`,
  );
});

module.exports = knex;
