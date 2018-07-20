const config = require('./config');
const winston = require('winston');
const morgan = require('morgan');
require('winston-daily-rotate-file');

const { format } = require('winston');

const logPrintFormat = format.printf(info => `[${info.level.toUpperCase()}] ${info.timestamp} ${info.label || ''} ${info.message}`);

const logConfig = {
  appLogFile: {
    level: config.logs.logLevel,
    handleExceptions: true,
    json: false,
    format: format.combine(
      format.timestamp(),
      logPrintFormat
    ),
    filename: `${config.logs.logFile}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d'
  },
  httpLogFile: {
    level: 'info',
    json: false,
    format: format.combine(
      format.timestamp(),
      logPrintFormat
    ),
    filename: `${config.logs.httpLogFile}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d'
  },
  console: {
    level: config.logs.consoleLogLevel,
    handleExceptions: true,
    json: false,
    colorize: true,
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      logPrintFormat
    )
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.DailyRotateFile(logConfig.appLogFile),
    new winston.transports.Console(logConfig.console)
  ],
  exitOnError: false
});

const httpLogger = winston.createLogger({
  transports: [
    new winston.transports.DailyRotateFile(logConfig.httpLogFile),
    new winston.transports.Console(logConfig.console)
  ],
  exitOnError: false
});

httpLogger.stream = {
  write: function (message) {
    message[message.length - 1] = '';
    httpLogger.info(message.substring(0, message.length - 1));
  }
};

const morganLogger = morgan('short', { stream: httpLogger.stream });

module.exports = { logger, morganLogger };