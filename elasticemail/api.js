var request = require('request');

exports.request = function(path, method, data, cb) {

  data['username'] = credentials.username;
  data['api_key'] = credentials.apiKey;

  var options = {
    url: 'https://api.elasticemail.com' + path,
    method: method
  };

  if(method.toLowerCase() === 'post') {
    options['form'] = data;
  } else {
    options['qs'] = data;
  }

  request(options, function(err, res, body) {
    cb(body);
  });

};