var chai = require('chai')
  , expect = require('chai').expect
  , factories = require('chai-factories')
  , elasticemail = require('../elasticemail/');

chai.use(factories);

describe('elasticemail', function() {

  describe('mailer', function() {
    it('should respond to send', function() {
      expect(elasticemail.mailer).to.respondTo('send');
    });

    it('should respond to status', function() {
      expect(elasticemail.mailer).to.respondTo('status');
    });

  });

});