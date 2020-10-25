let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3000);
console.log('index.html 托管在 3000 端口下...')