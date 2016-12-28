'use strict';

let express = require('express');
let app = express();
let port;

if (process.env.NODE_ENV == 'production') {
    port = process.env.PORT;
}
else{
    port = 3000;
}

app.listen(port, function(){
    console.log('listening on Port ' + port);
});