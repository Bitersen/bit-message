const msg = require('../src/index')

msg.log('Log message')
msg.info('Info message')
msg.warn('Warning message')
msg.error('Error message')
msg.assert(false, 'Assert message')
