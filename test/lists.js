var chai         = require('chai'),
    expect       = require('chai').expect,
    assert       = require('chai').assert,
    elasticemail = require('../elasticemail/'),
    config       = require('./fixtures/config');


describe('elasticemail', function() {
  var client = elasticemail.createClient(config);

  describe('lists', function() {
    it('should respond to createContact', function() {
      expect(client.lists).to.respondTo('createContact');
    });

    it('should respond to deleteContact', function() {
      expect(client.lists).to.respondTo('deleteContact');
    });

    it('should respond to createList', function() {
      expect(client.lists).to.respondTo('createList');
    });

    it('should respond to deleteList', function() {
      expect(client.lists).to.respondTo('deleteList');
    });

    it('should respond to addContact', function() {
      expect(client.lists).to.respondTo('addContact');
    });

    it('should respond to removeContact', function() {
      expect(client.lists).to.respondTo('removeContact');
    });

    it('should respond to getLists', function() {
      expect(client.lists).to.respondTo('getLists');
    });

    it('should respond to getContacts', function() {
      expect(client.lists).to.respondTo('getContacts');
    });

  });

});
