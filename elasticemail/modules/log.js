var api = require('../api')
  , xml2js = require('xml2js');

var parser = new xml2js.Parser({ explicitRoot: false, ignoreAttrs: false, mergeAttrs: true });

exports.log = function(options, cb) {
  api.request('/mailer/status/log', 'get', options, function(result) {
    options.format = options.format || 'xml';

    if(options.format === 'xml') {
      parser.parseString(response, function(err, result) {
        cb(result);
      });
    } else {
      cb(result);
    }
  });
};