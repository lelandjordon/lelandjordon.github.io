var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('watch', function(){
  gulp.watch('./css/**/*.scss', ['sass']); // watches the scss file
})                      // and runs the sass task with [sass]

gulp.task('connect', function(){
  connect.server({     // uses port 8080 via the gulp-connect module
    livereload: true  // automaticaly reloads the page in your browser
  })
});


gulp.task('sass', function(){
  return gulp.src('./css/**/*.scss')  // sets the source of the files to compile
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'))
  .pipe(connect.reload());
});

gulp.task('jshint', function(){
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});


gulp.task('banana', function() {
  console.log("I'm the banana task, man!")
});

// gulp.task('date', function(){
//   var date = newDate();
//   console.log(date);
// });                     doesn't work.

gulp.task('date', function(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();
  console.log("Yay, today is " + month + '/' + day + '/' + year);
});



gulp.task('default', ['sass', 'connect', 'watch']);
