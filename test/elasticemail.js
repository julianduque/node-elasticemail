var chai = require('chai')
  , expect = require('chai').expect
  , elasticemail = require('../elasticemail/');

describe('elasticemail', function() {

  it('should respond to login', function() {
    expect(elasticemail).to.respondTo('login');
  });

  describe('#login', function() {

    it('should store credentials', function() {
      var creds = { username: 'aaaa', apiKey: 'bbbb' };
      elasticemail.login(creds);
      expect(credentials).to.equal(creds);
    });

  });

});