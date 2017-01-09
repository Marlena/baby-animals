'use strict';

const connect = require('connect');
const gulp = require('gulp');
const http = require('http');
const serveStatic = require('serve-static');
const gutil = require('gulp-util');
const Launcher = require('webdriverio/build/lib/launcher');
const mocha = require('gulp-mocha');
const path = require('path');
const wdio = new Launcher(path.join(__dirname, '../wdio.conf.js'));

let httpServer;


gulp.task('http', (done) => {
    const app = connect().use(serveStatic('./public'));
    httpServer = http.createServer(app).listen(9000, done);
});

gulp.task('integration', ['http'], () => {
    return wdio.run( code => {
        process.exit(code);
    }, error => {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    })
});

gulp.task('webdriver', ['integration'], ()=>{
    httpServer.close();
});

gulp.task('mocha', () => {
    //process.env.NODE_ENV = 'development';

    return gulp.src(['test/specs/**/*.js'], { read: false })
        .pipe(mocha({reporter: 'progress' }))
        .on('error', gutil.log);
});