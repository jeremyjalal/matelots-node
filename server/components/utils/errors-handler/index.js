const errorHandler = (logger) => {
  // eslint-disable-next-line
    return async (err, req, res, next) => {
    const payload = err.output.payload;
    if (err.isServer) {
      logger.error(`${payload.statusCode} [${payload.error}] ${err.message}`);
    }
    return res.status(err.output.statusCode).json(payload);
  };
};

module.exports = errorHandler;