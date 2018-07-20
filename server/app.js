const { logger } = require('../config/logger');
const errorsHandler = require('./components/utils/errors-handler');
const boom = require('boom');
const hello = require('./components/hello-world');

const url_prefix = '/api';

module.exports = (app) => {
  app.use(`${url_prefix}/hello`, hello);

  app.get(`${url_prefix}/`, async (req, res) => {
    return res.status(200).send();
  });

  app.use('*', async (req, res, next) => {
    next(boom.notFound('Resource Not Found'));
  });

  app.use('*', errorsHandler(logger));
};
