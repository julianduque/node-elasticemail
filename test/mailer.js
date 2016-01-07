/* global describe, it */

var chai = require('chai')
var expect = chai.expect
var assert = chai.assert
var elasticemail = require('../elasticemail/')
var config = require('./fixtures/config')
var nock = require('nock')
var Mailer = require('../elasticemail/modules/mailer')

describe('elasticemail', function () {
  var client = elasticemail.createClient(config)

  describe('mailer', function () {
    it('should be an instance of Mailer', function () {
      assert.ok(client.mailer instanceof Mailer)
    })

    describe('send', function () {
      it('should respond to send', function () {
        expect(client.mailer).to.respondTo('send')
      })

      it('should send an email', function (done) {
        var msg = {
          username: config.username,
          api_key: config.apiKey,
          from: 'Test user',
          from_email: 'test@email.com',
          to: 'my@email.com'
        }

        nock(config.endpoint)
          .post('/mailer/send', msg)
          .reply(200, '1234-1234-1234-1234')

        client.mailer.send(msg, function (err, result) {
          assert.ok(!err)
          assert.equal(result, '1234-1234-1234-1234')
          done()
        })
      })
    })

    it('should respond to status', function () {
      expect(client.mailer).to.respondTo('status')
    })

    it('should respond to accountDetails', function () {
      expect(client.mailer).to.respondTo('accountDetails')
    })
  })
})
