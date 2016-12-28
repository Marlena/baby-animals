const gulp = require('gulp');
const server = require('gulp-express');


gulp.task('default', function(){
    server.run();
});
