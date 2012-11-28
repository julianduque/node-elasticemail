var api = require('../api');

exports.createContact = function(contact) {
  api.request('/lists/create-contact', 'post', { email: contact.email }, function(result) {
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
  api.request('/lists/get', 'post', {}, function(result) {
    console.log(result);
    cb(result);
  });
};

exports.getContacts = function(listname, cb) {
  api.request('/lists/get-contacts', 'post', { listname: listname }, function(result) {
    console.log(result);
    cb(result);
  });
};