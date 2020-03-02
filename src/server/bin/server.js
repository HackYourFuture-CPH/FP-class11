#!/usr/bin/env node

/**
 * Module dependencies.
 */

const debug = require('debug')('http');
const http = require('http');
const app = require('../app');
const { logger } = require('../api/lib/utils/winston');

/**
 * Get port from environment and store in Express.
 * 8090 is used as a proxy in development mode to have both nodejs and webpack-server running
 */
const port = parseInt(process.env.PORT, 10) || process.env.API_PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  logger.info(
    `Server Listening on ${bind} (use port ${process.env.CLIENT_PORT}/api as a proxy)`,
  );
}
