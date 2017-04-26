var xml2js = require('xml2js')

var parser = new xml2js.Parser({
  explicitRoot: false,
  ignoreAttrs: false,
  mergeAttrs: true
})

function Mailer (api) {
  if (!(this instanceof Mailer)) {
    return new Mailer(api)
  }

  this.api = api
}

Mailer.prototype.send = function (msg, cb) {
  this.api.request('/mailer/send', 'post', msg, cb)
}

Mailer.prototype.status = function (jobId, cb) {
  this.api.request('/mailer/status/' + jobId, 'get', { showstats: true }, function (err, response) {
    if (err) {
      return cb(err)
    }

    parser.parseString(response, cb)
  })
}

Mailer.prototype.accountDetails = function (cb) {
  this.api.request('/mailer/account-details', 'get', function (err, response) {
    if (err) {
      return cb(err)
    }

    parser.parseString(response, cb)
  })
}

module.exports = Mailer
