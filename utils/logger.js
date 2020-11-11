import debug from 'debug'

const errorLogger = debug('app:error')
export const error = errorLogger

const infoLogger = debug('app:info')
infoLogger.log = console.log.bind(console)
export const info = infoLogger

export default infoLogger