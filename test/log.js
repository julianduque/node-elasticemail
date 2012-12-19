var chai = require('chai')
  , expect = require('chai').expect
  , factories = require('chai-factories')
  , elasticemail = require('../elasticemail/');

chai.use(factories);

describe('elasticemail', function() {

  describe('log', function() {
    it('should respond to log', function() {
      expect(elasticemail.log).to.respondTo('log');
    });

  });

});