var chai         = require('chai'),
    expect       = require('chai').expect,
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/'),
    config       = require('./fixtures/config');

describe('elasticemail', function() {
  var client = elasticemail.createClient(config);

  describe('mailer', function() {
    it('should respond to send', function() {
      expect(client.mailer).to.respondTo('send');
    });

    it('should respond to status', function() {
      expect(client.mailer).to.respondTo('status');
    });

    it('should respond to accountDetails', function() {
      expect(client.mailer).to.respondTo('accountDetails');
    });

  });

});
