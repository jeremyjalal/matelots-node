const env = process.env.NODE_ENV || 'local';
const appRoot = require('app-root-path');
// Use {env} for specific environment configuration
console.log(`Loading config for ${env} environment...`);

const config = {
  app: {
    port: parseInt(process.env.APP_PORT) || 5002
  },
  logs: {
    logLevel: process.env.LOG_LEVEL || 'info',
    consoleLogLevel: process.env.CONSOLE_LOG_LEVEL || 'info',
    logFile: process.env.LOG_FILE || `${appRoot}/logs/app`,
    httpLogFile: process.env.HTTP_LOG_FILE || `${appRoot}/logs/access`,
    httpLogFormat: ''
  }
};


module.exports = config;