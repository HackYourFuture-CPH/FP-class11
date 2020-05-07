// swagger-ui-express
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {
    firebase_auth: {
      type: 'oauth2',
      authorizationUrl: 'seasony-login.firebaseapp.com',
      description: 'This API uses OAuth 2.',
      flows: 'authorizationCode',
      scopes: {
        read: 'read data based on user uid',
        write: 'write data based on user uid',
      },
    },
  },
  apis: ['./src/server/api/routes/*.js'],
};

module.exports = swaggerOptions;
