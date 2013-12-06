var chai         = require('chai'),
    expect       = require('chai').expect,
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/'),
    config       = require('./fixtures/config'),
    helper       = require('./helper/'),
    Mailer       = require('../elasticemail/modules/mailer');

describe('elasticemail', function() {
  var client = elasticemail.createClient(config),
      server;

  before(function (done) {
    helper.getServer(function (s) {
      server = s;
      done();
    });
  });

  describe('mailer', function() {

    it('should be an instance of Mailer', function () {
      assert.ok(client.mailer instanceof Mailer);
    });

    describe('send', function () {
      it('should respond to send', function() {
        expect(client.mailer).to.respondTo('send');
      });

      it('should send an email', function (done) {
        var msg = {
          username: config.username,
          api_key: config.apiKey,
          from: 'Test user',
          from_email: 'test@email.com',
          to: 'my@email.com'
        };

        server
          .post('/mailer/send', msg)
          .reply(200, '1234-1234-1234-1234');

        client.mailer.send(msg, function (err, result) {
          assert.ok(!!!err);
          assert.equal(result, '1234-1234-1234-1234');
          done();
        });
      });

    });

     it('should respond to status', function() {
      expect(client.mailer).to.respondTo('status');
    });

    it('should respond to accountDetails', function() {
      expect(client.mailer).to.respondTo('accountDetails');
    });

  });

});
