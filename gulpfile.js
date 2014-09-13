var gulp = require('gulp');
var livereload = require('gulp-livereload');
var noprotocol = require('gulp-noprotocol');

gulp.task('sass', function() {
  return gulp.src('public/sass/**/*.{scss,sass}')
    .pipe(noprotocol.sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('bundle-libs', function() {
  gulp.src([
      'public/libs/threejs/build/three.min.js'
    ])
    .pipe(noprotocol.concat('libs.bundle.js'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('bundle-app', function () {
  return gulp
    .src(['public/js/classes/*.js', 'public/js/main.js', 'public/views/**/*.html', 'public/js/directives/**/*.html'])
    .pipe(noprotocol.concat('main.min.js'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', ['sass', 'bundle-app', 'bundle-libs'], function() {
  gulp.watch('public/sass/**/*.{scss,sass}', ['sass']);

  gulp.watch(['public/js/**/*.js', 'public/views/**/*.html'], ['bundle-app']);

  livereload.listen();
  var globs = [
    'public/css/*.css',
    'public/dist/*.js',
    'app/views/**/*.php',
    'public/img/**/*.{svg,png}'
  ];
  gulp.watch(globs).on('change', livereload.changed);

  gulp.watch('gulpfile.js', noprotocol.exit('gulpfile.js has changed, quiting...'));
});

gulp.task('deploy', ['sass', 'bundle-libs', 'bundle-app']);

gulp.task('default', ['watch']);