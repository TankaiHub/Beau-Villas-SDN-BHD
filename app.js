let express = require('express');

let app = new express();

app.use(express.static('./dist'));

app.listen(8888);
console.log('8888')