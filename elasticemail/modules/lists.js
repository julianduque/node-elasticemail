var api = require('../api')
  , xml2js = require('xml2js');

var parser = new xml2js.Parser({ explicitRoot: false, ignoreAttrs: false, mergeAttrs: true });

exports.createContact = function(contact) {
  api.request('/lists/create-contact', 'post', contact, function(result) {
    console.log(result);
  });
};

exports.deleteContact = function(email) {
  api.request('/lists/delete-contact', 'post', { email: email }, function(result) {
    console.log(result);
  });
};

exports.createList = function(listname) {
  api.request('/lists/create-list', 'post', { listname: listname }, function(result) {
    console.log(result);
  });
};

exports.deleteList = function(listname) {
  api.request('/lists/delete', 'post', { listname: listname }, function(result) {
    console.log(result);
  });
};

exports.addContact = function(email, listname) {
  api.request('/lists/add-contact', 'post', { email: email, listname: listname }, function(result) {
    console.log(result);
  });
};

exports.removeContact = function(email, listname) {
  api.request('/lists/remove-contact', 'post', { email: email, listname: listname }, function(result) {
    console.log(result);
  });
};

exports.getLists = function(cb) {
  api.request('/lists/get', 'get', {}, function(response) {
    parser.parseString(response, function(err, result) {
      cb(result.list);
    });
  });
};

exports.getContacts = function(listname, cb) {
  api.request('/lists/get-contacts', 'get', { listname: listname }, function(response) {
    parser.parseString(response, function(err, result) {
      cb(result);
    });
  });
};