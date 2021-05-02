const chalk = require('chalk')
const boxen = require('boxen')
const isFalsy = require('./isFalsy')

const BOXEN_CONFIG = {
  style: {
    padding: 1,
    margin: {
      top: 1,
      right: 0,
      bottom: 1,
      left: 0
    },
    borderStyle: 'round',
  },
  log: {
    borderColor: 'green',
  },
  info: {
    borderColor: 'blue',
  },
  warn: {
    borderColor: 'yellow',
  },
  error: {
    borderColor: 'red',
  },
}

const log = (...messages) => {
  console.log(boxen(
    messages.join(`\n`),
    {
      ...BOXEN_CONFIG.style,
      ...BOXEN_CONFIG.log
    }
  ))
}

const info = (...messages) => {
  console.info(boxen(
    chalk.blue(messages.join(`\n`)),
    {
      ...BOXEN_CONFIG.style,
      ...BOXEN_CONFIG.info
    }
  ))
}

const warn = (...messages) => {
  console.warn(boxen(
    chalk.yellow(messages.join(`\n`)),
    {
      ...BOXEN_CONFIG.style,
      ...BOXEN_CONFIG.warn
    }
  ))
}

const error = (...messages) => {
  console.error(boxen(
    chalk.red(messages.join(`\n`)),
    {
      ...BOXEN_CONFIG.style,
      ...BOXEN_CONFIG.error
    }
  ))
}

const assert = (condition = true, ...messages) => {
  if (isFalsy(condition)) {
    console.log(
      boxen(
        chalk.red(messages.join(`\n`)),
        {
          ...BOXEN_CONFIG.style,
          ...BOXEN_CONFIG.error
        }
      )
    )
  }
}

module.exports = {
  log,
  info,
  warn,
  error,
  assert,
}
