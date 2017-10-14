const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src(['src/sass/styles.scss', 'src/sass/phonestyles.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/styles'));
});

gulp.task('default',function() {
    gulp.watch('src/sass/**.scss',['styles']);
});
