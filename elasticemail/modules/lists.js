var xml2js = require('xml2js');

var parser = new xml2js.Parser({
  explicitRoot: false,
  ignoreAttrs: false,
  mergeAttrs: true
});

function Lists(api) {
  if (!(this instanceof Lists)) {
    return new Lists(api);
  }

  this.api = api;
}

Lists.prototype.createContact = function(contact, cb) {
  api.request('/lists/create-contact', 'post', contact, cb);
};

Lists.prototype.deleteContact = function(email, cb) {
  api.request('/lists/delete-contact', 'post', { email: email }, cb);
};

Lists.prototype.createList = function(listname) {
  api.request('/lists/create-list', 'post', { listname: listname }, cb);
};

Lists.prototype.deleteList = function(listname) {
  api.request('/lists/delete', 'post', { listname: listname }, cb);
};

Lists.prototype.addContact = function(email, listname) {
  api.request('/lists/add-contact', 'post', { email: email, listname: listname }, cb);
};

Lists.prototype.removeContact = function(email, listname) {
  api.request('/lists/remove-contact', 'post', { email: email, listname: listname }, cb);
};

Lists.prototype.getLists = function(cb) {
  api.request('/lists/get', 'get', {}, function(err, response) {
    if (err) {
      return cb(err);
    }

    parser.parseString(response, cb);
  });
};

Lists.prototype.getContacts = function(listname, cb) {
  api.request('/lists/get-contacts', 'get', { listname: listname }, function(err, response) {
    if (err) {
      return cb(err);
    }

    parser.parseString(response, cb);
  });
};

module.exports = Lists;
