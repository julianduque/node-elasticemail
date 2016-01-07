var xml2js = require('xml2js')

var parser = new xml2js.Parser({
  explicitRoot: false,
  ignoreAttrs: false,
  mergeAttrs: true
})

function Log (api) {
  if (!(this instanceof Log)) {
    return new Log(api)
  }

  this.api = api
}

Log.prototype.log = function (options, cb) {
  this.api.request('/mailer/status/log', 'get', options, function (err, result) {
    options.format = options.format || 'xml'

    if (err) {
      return cb(err)
    }

    if (options.format === 'xml') {
      parser.parseString(result, cb)
    } else {
      cb(err, result)
    }
  })
}

module.exports = Log
