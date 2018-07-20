const express = require('express');
const body_parser = require('body-parser');
const boom = require('boom');
const logger = require('../../../config/logger').logger;

const router = express.Router();
router.use(body_parser.json());

router.post('/', async (req, res, next) => {

  try {
    logger.debug('Received hello world call');
    res.status(200).json('Hello world');
  } catch (error) {
    next(boom.badImplementation(error));
  }
});

module.exports = router;