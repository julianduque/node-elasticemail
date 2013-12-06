var chai         = require('chai'),
    expect       = require('chai').expect,
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/'),
    config       = require('./fixtures/config'),
    Mailer       = require('../elasticemail/modules/mailer');

describe('elasticemail', function() {
  var client = elasticemail.createClient(config);

  describe('mailer', function() {

    it('should be an instance of Mailer', function () {
      assert.ok(client.mailer instanceof Mailer);
    });

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
