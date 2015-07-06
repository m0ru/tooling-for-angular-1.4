var gulp = require('gulp'),
//docu @ https://www.npmjs.com/package/gulp-browserify
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    dedupe = require('gulp-dedupe');

// change the browserify task to be live-reloading (once js files change)
gulp.watch(['app/*.js', 'app/**/*.js'], ['browserify'])

gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('app/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(dedupe()) // Remove duplicates from previous tasks (if any).
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
});
