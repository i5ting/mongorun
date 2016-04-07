var Server = require('mongodb-core').Server

module.exports = function(config, command, cb){
  // Set up server connection
  var server = new Server({
      host: 'localhost'
    , port: 27017
    , reconnect: true
    , reconnectInterval: 50
  });

  // Add event listeners
  server.on('connect', function(_server) {
    console.log('connected');

    // Execute the ismaster command
    _server.command('system.$cmd', command, function(err, r) {
      if(config.is_debug){
        console.dir(JSON.parse(r));
      }
      //
      cb(err, JSON.parse(r));
      
      _server.destroy();
    });
  });

  server.on('close', function() {
    console.log('closed');
  });

  server.on('reconnect', function() {
    console.log('reconnect');
  });

  // Start connection
  server.connect();
};





