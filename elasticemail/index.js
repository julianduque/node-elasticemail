var Client = require('./client')

exports.createClient = function (opts) {
  return new Client(opts)
}
