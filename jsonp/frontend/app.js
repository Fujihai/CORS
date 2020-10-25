let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(4000);
console.log('index.html 托管在 4000 端口下...')