# mongorun

run mongo command 

一般我们在robo里执行命令查看结果

```
db.runCommand( { serverStatus: 1 } ).connections
```

现在用Node.js实现

## 安装

```
npm install -- save mongorun
```

## 用法

```
var cfg = require('./default')

require('mongorun')(cfg, {serverStatus: 1}, function(err, result){
  console.log(result.connections)
})
```

## 配置项

```
{
  "host": "localhost", 
  "port": 27017, 
  "reconnect": true, 
  "reconnectInterval": 50
}
```



## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
