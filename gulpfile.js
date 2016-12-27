'use strict';

//https://semaphoreci.com/community/tutorials/setting-up-an-end-to-end-testing-workflow-with-gulp-mocha-and-webdriverio

const connect = require('connect');
const gulp = require('gulp');
const http = require('http');
const Launcher = require('webdriverio/build/lib/launcher');
const path = require('path');
const server = require('gulp-express');
const serveStatic = require('serve-static');
const wdio = new Launcher(path.join(__dirname, 'wdio.conf.js'));

let httpServer;


gulp.task('default', function(){
    server.run();
});

gulp.task('http', (done) => {
    const app = connect().use(serveStatic('./public'));
    httpServer = http.createServer(app).listen(9000, done);
});


gulp.task('integration', ['http'], function(){
    return wdio.run( code => {
        process.exit(code);
    }, error => {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    })
});

gulp.task('test', ['integration'], ()=>{
    httpServer.close();
});