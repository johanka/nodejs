const winston = require('winston');
const fs = require('fs');
const logDir = 'log';

if(!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const tsFormat = ()  => (new Date()).toLocaleTimeString();

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true
    }),
    new (winston.transports.File)({
      filename: logDir + '/log.log',
      timestamp: tsFormat,
      level: 'debug'
    })
  ]
})

logger.level = 'debug';

logger.info('Hello world');
logger.debug('test');
