/// <binding />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');

var destPath = './wwwroot/libs/';

gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", function () {
    gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});

var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', function (done) {
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task("copyAssets", function () {
    return gulp.src(['.\\wwwroot\\app\\**\\*.{html,css}'])
        .pipe(gulp.dest('.\\wwwroot\\appScripts\\'));
});

gulp.task("watch", function () {
    return gulp.watch(['.\\wwwroot\\app\\**\\*.{html,css}'], ['copyAssets']);
});

//gulp.task('watch', ['watch.ts']);

//gulp.task('watch.ts', ['ts'], function () {
//    return gulp.watch('scripts/*.ts', ['ts']);
//});

//gulp.task('default', ['scriptsNStyles', 'watch']);