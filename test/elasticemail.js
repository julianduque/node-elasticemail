/* global describe, it */

var assert = require('chai').assert
var elasticemail = require('../elasticemail/')
var Client = require('../elasticemail/client')
var config = require('./fixtures/config')

describe('elasticemail', function () {
  describe('createClient', function () {
    it('should create an elasticemail client', function () {
      var client = elasticemail.createClient(config)
      assert.ok(client instanceof Client)
    })

    it('should set the username and password', function () {
      var client = elasticemail.createClient(config)

      assert.equal(config.username, client.username)
      assert.equal(config.apiKey, client.apiKey)
    })

    it('should set the API endpoint', function () {
      var client = elasticemail.createClient(config)

      assert.equal(config.endpoint, client.endpoint)
    })
  })
})
