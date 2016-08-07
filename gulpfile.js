'use strict';

const del = require('del');
const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const gulpLoadPlugins = require('gulp-load-plugins');

let wiredep = require('wiredep').stream;

const plugins = gulpLoadPlugins();

const sassRoot = 'src/scss';
const cssRoot = 'app/css';

const views = 'app/views/**/*.html';
const viewsRoot = 'app/views/';

function handleError(err) {
    console.error(err.toString());
}

/**
 * Default task
 * It's default task executed when run gulp only
 * Before execute itself, it executes build-sass and inject-dependencies tasks
 */
gulp.task('default', ['build-sass', 'inject-dependencies'], function () {
    console.log('Gulp tasks ran successfully...');
});

/**
 * Build all scss and css files styles
 */
gulp.task('build-sass', () => {
    return gulp.src(sassRoot + '/*.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.notify('Compile Sass file: <%= file.relative %>...'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.autoprefixer('last 10 versions'))
        .pipe(plugins.sass({
            style: 'compressed'
        })).on('error', handleError)
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(cssRoot));
});

/**
 * Inject depenencies inside index.html
 */
gulp.task('inject-dependencies', () => {
    return gulp.src(views)
        .pipe(wiredep())
        .pipe(plugins.rename((path) => { path.extname = '.html'; }))
        .pipe(gulp.dest(viewsRoot));
});