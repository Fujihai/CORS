let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(5500);
console.log('index.html 托管在 5500 端口下...')