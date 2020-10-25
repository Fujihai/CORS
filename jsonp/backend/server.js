let express = require('express')
let app = express()
app.get('/msg', (req, res) => {
  console.log('req.query = ', req.query)
    const { wd, callback } = req.query
    console.log(wd)
    console.log(callback)
    res.end(`${callback}('i am msg from server')`)
})

app.listen(3000)
console.log('服务器正在监听 3000 端口...')
