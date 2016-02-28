var paths = {
    scripts: {
        base: [
            'node_modules/uswds/assets/js/components.js',
            'node_modules/uswds/assets/js/vendor/*.js',
        ]
    },
    styles: {
        base: [
            'node_modules/uswds/assets/css/*.css',
        ]
    }
}

var es6promise = require('es6-promise').polyfill();
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var del = require('del');
var gulpif = require('gulp-if');
var insert = require('gulp-insert');
var fs = require('fs');
var runSequence = require('run-sequence');
var exec = require('shelljs').exec;

var autoprefixerOptions = {browsers: ['last 2 versions', 'ie >= 9']};
var uglifyOptions = {
    compress: {
        dead_code: false,
        unused: false
    }
};

var styleTasks = [];
var scriptTasks = [];

var debug = false;
var blessIt = false;

gulp.task('debug', function() {
    debug = true;
});
gulp.task('bless', function() {
    blessIt = true;
})
var isBless = function() {
    return blessIt;
};
var isDebugNotBless = function() {
    return !blessIt && debug;
};
var isNotDebug = function() {
    return !debug;
};
var isDebug = function() {
    return debug;
};

for (var styleList in paths.styles) {
    if (!paths.styles.hasOwnProperty(styleList)) {
        continue;
    }
    styleTasks.push('styles:'+styleList);
    (function(listName) {
        gulp.task('styles:' + listName, function () {
            return gulp.src(paths.styles[listName], {base: '.' })
            .pipe(gulpif(isDebugNotBless, sourcemaps.init()))
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(concat(listName + '.css'))
            .pipe(gulpif(isNotDebug, uglifycss()))
            .pipe(gulp.dest('public/css'));
        });
    })(styleList);
}
for (var scriptList in paths.scripts) {
    if (!paths.scripts.hasOwnProperty(scriptList)) {
        continue;
    }
    scriptTasks.push('scripts:'+scriptList);
    (function(listName) {
        gulp.task('scripts:' + scriptList, function () {
            return gulp.src(paths.scripts[listName], {base: '.' })
            .pipe(gulpif(isDebug, sourcemaps.init({loadMaps: true})))
            .pipe(concat(listName + '.js'))
            .pipe(gulpif(isNotDebug, uglify(uglifyOptions)))
            .pipe(gulpif(isDebug, sourcemaps.write()))
            .pipe(gulp.dest('public/js'));
        });
    })(scriptList);
}

gulp.task('images:base', function() {
   return gulp.src('node_modules/uswds/assets/img/*')
   .pipe(gulp.dest('public/img'));
});

gulp.task('fonts:base', function() {
   return gulp.src('node_modules/uswds/assets/fonts/*')
   .pipe(gulp.dest('public/fonts'));
});

gulp.task('clean:scripts', function(cb) {
    del([
        'web/js/*.js'
    ], cb);
});
gulp.task('clean:styles', function(cb) {
    del([
        'web/css/*.css'
    ], cb);
});
gulp.task('clean', ['clean:scripts', 'clean:styles']);
gulp.task('styles', styleTasks);
gulp.task('scripts', scriptTasks);
gulp.task('images', ['images:base']);
gulp.task('fonts', ['fonts:base']);
gulp.task('default', function(){
    runSequence('everything');
});
gulp.task('develop', function(){
    runSequence('debug', 'everything');
});
gulp.task('everything', function(){
    runSequence(['scripts', 'styles', 'images', 'fonts'], 'clean');
});
