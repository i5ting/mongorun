# mongorun
run mongo command 


一般我们在robo里执行命令查看结果

```
db.runCommand( { serverStatus: 1 } ).connections
```

现在用Node.js实现

```
var cfg = require('./default')

require('mongorun')(cfg, {serverStatus: 1}, function(err, result){
  console.log(result.connections)
})
```