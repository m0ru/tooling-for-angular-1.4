var gulp = require('gulp');
var jss = require('gulp-jss');
var autoprefixer = require('gulp-autoprefixer');

//TODO var sourcemaps = require('gulp-sourcemaps');

gulp.task('jss', function() {
    //returning the pipe allows the task-runner to know when the task finishes
    return gulp.src(['./jss/*.js'])//, 'app/*.js']) //TODO put the directives in a seperate directory
    .pipe(jss({
        named: true // keep the names as they are
    }))
    //autoprefixer takes care of vendor-prefixes
    //.pipe(autoprefixer({ browsers: ['last 2 versions'] }))

    .pipe(gulp.dest('css-bundle'));
});
