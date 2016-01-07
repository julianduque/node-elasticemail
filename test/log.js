/* global describe, it */

var chai = require('chai')
var expect = chai.expect
var assert = chai.assert
var elasticemail = require('../elasticemail/')
var config = require('./fixtures/config')
var Log = require('../elasticemail/modules/log')

describe('elasticemail', function () {
  var client = elasticemail.createClient(config)

  describe('log', function () {
    it('should be an instance of Log', function () {
      assert.ok(client.log instanceof Log)
    })

    it('should respond to log', function () {
      expect(client.log).to.respondTo('log')
    })
  })
})
