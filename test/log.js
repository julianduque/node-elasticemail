var chai         = require('chai'),
    expect       = require('chai').expect,
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/'),
    config       = require('./fixtures/config'),
    Log          = require('../elasticemail/modules/log');

describe('elasticemail', function() {
  var client = elasticemail.createClient(config);

  describe('log', function() {
    it('should be an instance of Log', function () {
      assert.ok(client.log instanceof Log);
    });

    it('should respond to log', function() {
      expect(client.log).to.respondTo('log');
    });

  });

});
