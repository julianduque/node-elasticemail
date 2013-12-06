var chai         = require('chai'),
    expect       = require('chai').expect,
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/'),
    config       = require('./fixtures/config');

describe('elasticemail', function() {
  var client = elasticemail.createClient(config);

  describe('log', function() {
    it('should respond to log', function() {
      expect(client.log).to.respondTo('log');
    });

  });

});
