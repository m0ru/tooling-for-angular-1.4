var gulp = require('gulp'),
    //docu @ https://www.npmjs.com/package/gulp-browserify
    browserify = require('gulp-browserify'); 

// change the browserify task to be live-reloading (once js files change) 
gulp.watch(['app/*.js', 'app/**/*.js'], ['browserify'])
 
gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src('app/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build'))
});
