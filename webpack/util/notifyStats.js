const log = require('debug')('webpack:stats')

function notifyError(error) {
  // BELLs when something goes wrong!
  log('\x07' + error)
}

function notifyWarning(warning) {
  log(warning)
}

module.exports = (stats) => {
  const json = stats.toJson()

  if (json.errors.length > 0) {
    json.errors.forEach(notifyError)
  } else if (json.warnings.length > 0) {
    json.warnings.forEach(notifyWarning)
  } else {
    log(stats.toString({
      chunks: false,
      colors: true
    }))
  }
}
