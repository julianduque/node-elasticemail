var util   = require('util'),
    Api    = require('./api'),
    Mailer = require('./modules/mailer'),
    Lists  = require('./modules/lists'),
    Log    = require('./modules/log');

function Client(opts) {
  if (!(this instanceof Client)) {
    return new Client(opts);
  }

  Client.super_.call(this, opts);

  this.mailer = new Mailer(this);
  this.lists  = new Lists(this);
  this.log    = new Log(this);
}

util.inherits(Client, Api);

module.exports = Client;
