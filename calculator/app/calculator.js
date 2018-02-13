const log = require('./logger').logger;

function sum(augend, addend) {
  log.info('derp')
    return augend + addend;
}

module.exports.sum = sum;
