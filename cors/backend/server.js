let express = require('express');
let app = express();
// 设置白名单，也就是设置哪些域可以访问当前域的资源
let whiteList = ['http://localhost:3000'];
app.use((req, res, next) => {
    // 前端发送 http 请求时，浏览器会在 header 里面加上 origin 字段，字段值是当前域
    let origin = req.headers.origin;
    if(whiteList.includes(origin)) {
        // 设置哪个源可以访问我
        res.setHeader('Access-Control-Allow-Origin', origin);
        // 允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers', 'name');
        // 允许哪个方法访问我
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 允许携带 cookie
        res.setHeader('Access-Control-Allow-Credentials', true);
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age', 6);
        // 允许返回的头
        res.setHeader('Access-Control-Expose-Headers', 'name');
        
        if (req.method === 'OPTIONS') {
            res.end()   // OPTIONS 请求不做任何处理
        }
    }
    next()
})

// 响应 PUT 请求
app.put('/getData', (req, res) => {
    console.log(`server: ${req.headers}`)
    res.setHeader('name', 'jw');
    res.end('I am msg form server. Response for PUT request.')
})

// 响应 GET 请求
app.get('/getData', (req, res) => {
    console.log(`server:${req.headers}`);
    res.end('I am msg from server. Response for GET request.')
})

app.use(express.static(__dirname));
app.listen(4000);
console.log('服务器端正在监听 4000 端口...')