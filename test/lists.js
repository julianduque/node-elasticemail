var chai = require('chai')
  , expect = require('chai').expect
  , factories = require('chai-factories')
  , elasticemail = require('../elasticemail/');

chai.use(factories);

describe('elasticemail', function() {

  describe('lists', function() {
    it('should respond to createContact', function() {
      expect(elasticemail.lists).to.respondTo('createContact');
    });

    it('should respond to deleteContact', function() {
      expect(elasticemail.lists).to.respondTo('deleteContact');
    });

    it('should respond to createList', function() {
      expect(elasticemail.lists).to.respondTo('createList');
    });

    it('should respond to deleteList', function() {
      expect(elasticemail.lists).to.respondTo('deleteList');
    });

    it('should respond to addContact', function() {
      expect(elasticemail.lists).to.respondTo('addContact');
    });

    it('should respond to removeContact', function() {
      expect(elasticemail.lists).to.respondTo('removeContact');
    });

    it('should respond to getLists', function() {
      expect(elasticemail.lists).to.respondTo('getLists');
    });

    it('should respond to getContacts', function() {
      expect(elasticemail.lists).to.respondTo('getContacts');
    });

  });

});