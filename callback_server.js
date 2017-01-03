const http = require('http');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');


let port;

if (process.env.NODE_ENV == 'production') {
    port = process.env.PORT;
}
else{
    port = 3000;
}

var serve = serveStatic('./public');

var server = http.createServer(function onRequest(request, response){
    serve(request, response, finalhandler);
});

server.listen(port, function(){
    console.log('listening on port ' + port);
});