const http = require('http')

const data = { title: 'target-server', password: '123456' }

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end(JSON.stringify(data))
    }
})

server.listen(4000, () => {
    console.log('服务器运行在 http://localhost: 4000...')
})