let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', async function () {
    del.sync('dist');
});

gulp.task('sass', () => {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            overribeBrowserslist: ['last 8 versions']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('css', () => {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
    ])
        .pipe(concat('_libs.sass'))
        .pipe(gulp.dest('app/sass/utils'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('script', () => {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', () => {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', () => {
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));

    let BuildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));

    let BuildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));

    let BuildImg = gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', () => {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'sass', 'js', 'browser-sync', 'watch'));