const http = require('http')

// 接收浏览器端请求，需要先使用 cors 方式解决浏览器端与中间服务器的跨域问题
const server = http.createServer((request, response) => {
    // 代理服务器，直接和浏览器交互，需要设置 CORS 的头部字段
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    })

    // 将请求转发至目标服务器
    const proxyRequest = http.request({
        host: '127.0.0.1',
        port: 4000,
        url: '/',
        method: request.method,
        headers: request.headers
    }, serverResponse => {
        var body = '';
        serverResponse.on('data', chunk => {
            body += chunk
        });

        serverResponse.on('end', () => {
            console.log('The data is ' + body)
            // 将响应结果转发给浏览器
            response.end(body)
        });
    }).end()
})

server.listen(3000, () => {
    console.log('中间代理服务器运行在 http://localhost:3000')
})