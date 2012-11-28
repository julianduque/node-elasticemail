var querystring = require('querystring')
  , https = require('https');

exports.request = function(path, method, data, cb) {

  data['username'] = credentials.username;
  data['api_key'] = credentials.apiKey;

  var data = querystring.stringify(data)
    , options = {
      host: 'api.elasticemail.com',
      path: path,
      port: '443',
      type: method
    };

  if(method.toLowerCase() == 'post') {
    options['headers'] = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length
    }
  }

  var result = '';
  var req = https.request(options, function(res) {
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      console.log(chunk);
      result = chunk;
    });

    res.on('error', function(e) {
      result = 'Error: ' + e.message;
    });
  });

  req.on('end', function() {
    cb(result);
    result = '';
  });

  req.write(data);
  req.end();
}