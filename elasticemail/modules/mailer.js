var xml2js = require('xml2js');
var async = require('async');

var parser = new xml2js.Parser({
  explicitRoot: false,
  ignoreAttrs: false,
  mergeAttrs: true
});

function Mailer(api) {
  if (!(this instanceof Mailer)) {
    return new Mailer(api);
  }

  this.api = api;
}

Mailer.prototype.send = function(msg, cb) {

  var self = this;

  if(msg.attachments && Object.prototype.toString.call(msg.attachments) == '[object Array]') {
    
    var processes = [];
    var uploads   = [];
    
    msg.attachments.forEach(function(attachment){    
      
      (function(name, buffer){
      
         processes.push(function(next){
            
            self.api.request('/attachments/upload', 'put', { 'file' : name, 'buffer' : buffer }, function(err, body) {            
              
               if(body) 
                  uploads.push(body.replace(/^\s+|\s+$/g,''));

               next(err, uploads);
       
            });
         });
         
      })(attachment.name, attachment.buffer);
    });
    
    async.waterfall(processes, function(err,uploads) {
      
      if(err){
         cb(err);
      }
      else {       
         msg.attachments = uploads.join(';');         
         self.api.request('/mailer/send', 'post', msg, cb);  
      }    
    });
  
  }
  else
  {
    self.api.request('/mailer/send', 'post', msg, cb);
  }
};

Mailer.prototype.status = function(jobId, cb) {
  this.api.request('/mailer/status/' + jobId, 'get', { showstatus: true }, function(err, response) {
    if (err) {
      return cb(err);
    }

    parser.parseString(response, cb);
  });
};

Mailer.prototype.accountDetails = function(cb) {
  this.api.request('/mailer/account-details', 'get', function(err, response) {
    if (err) {
      return cb(err);
    }

    parser.parseString(response, cb);
  });
};

module.exports = Mailer;
