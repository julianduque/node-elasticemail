var util = require('util')
var Api = require('./api')
var Mailer = require('./modules/mailer')
var Lists = require('./modules/lists')
var Log = require('./modules/log')

function Client (opts) {
  if (!(this instanceof Client)) {
    return new Client(opts)
  }

  Client.super_.call(this, opts)

  this.mailer = new Mailer(this)
  this.lists = new Lists(this)
  this.log = new Log(this)
}

util.inherits(Client, Api)

module.exports = Client
