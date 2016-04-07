var cfg = require('./default')

require('.')(cfg, {serverStatus: 1}, function(err, result){
  console.log(result.connections)
})