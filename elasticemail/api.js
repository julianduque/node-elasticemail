var request = require('request');

function Api(opts) {
  opts = opts || {};
  this.username = opts.username;
  this.apiKey = opts.apiKey;
  this.endpoint = opts.endpoint || 'https://api.elasticemail.com';
}

Api.prototype.request = function(path, method, data, cb) {

  data['username'] = this.username;
  data['api_key'] = this.apiKey;
  
  var options = {
    url: this.endpoint + path,
    method: method
  };  
  
  if(data.file) {
   data['file'] = data.file;
   options.body = data.buffer;
   
   delete(data.buffer);
  }  

  options['qs'] = data;
  
  console.log(options);

  request(options, function(err, res, body) {
  
   console.log('RESPONSE');
   console.log(err);
  
    cb(err, body);
  });

};

module.exports = Api;
