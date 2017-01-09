const gulp = require('gulp');
var connect = require('gulp-connect');
const http = require('http');
const serveStatic = require('serve-static');
const nodemon = require('gulp-nodemon');
const finalhandler = require('finalhandler');
const express = require('express');
const myApp = require('../app');


let port;

if (process.env.NODE_ENV == 'production') {
   port = process.env.PORT;
}
else{
   port = 3000;
}


gulp.task('server', function(){

   var app = require('connect')()
       .use(serveStatic('./public'));


   require('http').createServer(app)
       .listen(port);

 });

gulp.task('nodemon', function(){
    nodemon({
        script: 'app.js'
    })
});

gulp.task('simplest-server', function(){

    var serve = serveStatic('./public');

    var server = http.createServer(function onRequest(request, response){
        serve(request, response, finalhandler);
    });

    server.listen(port, function(){
        console.log('listening on port ' + port);
    });

});

gulp.task('express-server', function(){

    let app = express();
    app.use(express.static('public'));
    app.listen(port, function(){
        console.log('listening on Port ' + port);
    });

});

gulp.task('server-listen', function(){
  myApp.listen(port, function(){
    console.log('listening on Port ' + port);
  })

});