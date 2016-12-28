const gulp = require('gulp');
var gls = require('gulp-live-server');

const server = gls.static();


gulp.task('server', function(){
   server.start()
});