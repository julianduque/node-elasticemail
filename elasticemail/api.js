var request = require('request')

function Api (opts) {
  opts = opts || {}
  this.username = opts.username
  this.apiKey = opts.apiKey
  this.endpoint = opts.endpoint || 'https://api.elasticemail.com'
}

Api.prototype.request = function (path, method, data, cb) {
  data.api_key = this.apiKey
  data.username = this.username

  var options = {
    url: this.endpoint + path,
    method: method
  }

  if (method.toLowerCase() === 'post') {
    options.form = data
  } else {
    options.qs = data
  }

  request(options, function (err, res, body) {
    cb(err, body)
  })
}

module.exports = Api
