const chalk = require('chalk')
const boxen = require('boxen')

module.exports = {
	// Boxen configuration
	boxenConfig: {
		style: {
			padding: 1,
			margin: {
				top: 1,
				right: 0,
				bottom: 1,
				left: 0
			},
			borderStyle: 'round'
		},
    log: {
      borderColor: 'green'
    },
    info: {
      borderColor: 'blue'
    },
    warn: {
      borderColor: 'yellow'
    },
		error: {
			borderColor: 'red'
		}
	},

	// Methods
  log (message) {
    console.log(boxen(
      message,
      {
        ...this.boxenConfig.style,
        ...this.boxenConfig.log
      }
    ))
  },

	info (message) {
		console.info(boxen(
		chalk.blue(message),
			{
				...this.boxenConfig.style,
				...this.boxenConfig.info
			}
		))
	},


	warn (message) {
		console.error(boxen(
			chalk.yellow(message),
			{
				...this.boxenConfig.style,
				...this.boxenConfig.warn
			}
		))
	},

	error (message) {
		console.error(boxen(
			chalk.red(message),
			{
				...this.boxenConfig.style,
				...this.boxenConfig.error
			}
		))
	}
}
