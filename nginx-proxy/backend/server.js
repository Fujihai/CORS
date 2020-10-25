var http = require('http')
var server = http.createServer()
var qs = require('querystring')
server.on('request', function (req, res) {
  console.log('服务器端接收到转发的请求...', req.url)
  var params = qs.parse(req.url.substring(2))
  var data = 'Login success!'
  // 向前台写cookie
  res.writeHead(200, {
    'Set-Cookie': 'l=a123456;Path=/;Domain=127.0.0.1:4000;HttpOnly', // HttpOnly:脚本无法读取
  })
  res.write(JSON.stringify(data))
  res.end()
})
server.listen('4000')
console.log('Server is running at port 4000...')