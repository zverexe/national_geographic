var gulp = require('gulp');
var sass = require('gulp-sass');
    


gulp.task('sass', function(){
  gulp.src('styles/sass/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('styles/'))
    
});
gulp.task('watch', function(){
  
  gulp.watch('styles/sass/*.scss', ['sass']); 
  // Other watchers
});
gulp.task('default', ['sass', 'watch']);