var chai         = require('chai'),
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/')
    Client       = require('../elasticemail/client'),
    config       = require('./fixtures/config');

describe('elasticemail', function() {
  
  var endpoint = 'https://api.elasticemail.com';
  
  describe('api', function() {
    
    it('should verify 200 status for elasticemail', function(done) {
      var request = require('request');

      request(endpoint, function (error, response, body) {
        assert.equal(+response.statusCode, 200);
        done();
      });
    });
  });
  
  describe('route', function(){
    
    it('should verify 200 status for send', function(done) {
      var request = require('request');

      request(endpoint + '/mailer/send', function (error, response, body) {
        assert.equal(+response.statusCode, 200);
        done();
      });
    });
  });
  
  describe('route', function() {
    
    it('should verify 200 status for upload', function(done) {
      var request = require('request');

      request(endpoint + '/attachments/upload', function (error, response, body) {
        assert.equal(+response.statusCode, 200);
        done();
      });
    });
    
  })

  describe('createClient', function () {

    it('should create an elasticemail client', function () {
      var client = elasticemail.createClient(config);
      assert.ok(client instanceof Client);
    });

    it('should set the username and password', function () {
      var client = elasticemail.createClient(config);

      assert.equal(config.username, client.username);
      assert.equal(config.apiKey, client.apiKey);
    });

    it('should set the API endpoint', function () {
      var client = elasticemail.createClient(config);

      assert.equal(config.endpoint, client.endpoint);
    });
  });

});
