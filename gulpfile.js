var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 静态服务器 + 监听 css/html 文件
gulp.task('serve', function () {
  browserSync.init({
    server: "./"
  });
  gulp.watch(['*.html', 'assets/stylesheets/*.css', 'assets/javascripts/*.js']).on('change', reload);
});

gulp.task('default', ['serve']);
