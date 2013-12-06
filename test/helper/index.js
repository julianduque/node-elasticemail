var hock = require('hock'),
    server;

exports.getServer = function (cb) {
  if (server) return cb(server);

  hock.createHock(12345, function (err, hockServer) {
    server = hockServer;
    cb(hockServer);
  });
};
