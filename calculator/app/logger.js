const winston = require('winston');
const fs = require('fs');
const logDir = 'log';

if(!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const tsFormat = ()  => (new Date()).toLocaleTimeString();

var logger = new (winston.Logger)({
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
});

module.exports.logger = logger;
