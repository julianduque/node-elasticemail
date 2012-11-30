var api = require('../api')
  , xml2js = require('xml2js');

var parser = new xml2js.Parser({ explicitRoot: false, ignoreAttrs: false, mergeAttrs: true });

exports.send = function(options, cb) {
  api.request('/mailer/send', 'post', options, function(result) {
    cb(result);
  });
};

exports.status = function(jobId, cb) {
  api.request('/mailer/status/' + jobId, 'get', { showstatus: true }, function(response) {
    parser.parseString(response, function(err, result) {
      cb(result);
    });
  });
}