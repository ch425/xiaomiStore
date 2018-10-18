
// 引入gulp模块
const gulp = require('gulp'),
// 引入压缩html模块
htmlmin = require('gulp-htmlmin'),
// 引入压缩js模块
uglify = require('gulp-uglify'),
// 引入开启服务器模块
connect = require('gulp-connect'),
// 搭建es6转es5模块
babel = require('gulp-babel'),
cssmin = require('gulp-cssmin'),
imagemin = require('gulp-imagemin');
// task   创建一个任务
// src   获取文件
// watch  监听文件
// dest  输出文件

gulp.task('html',function(){
    var options = {
       collapseWhitespace:true,
       removeComments:true,
       minifyJS:true,
       minifyCSS:true   
   };
   // 获取app文件夹下面的所有html文件    
   gulp.src('app/**/*.html')
          .pipe(htmlmin(options))
          .pipe(gulp.dest('dist/'))
          .pipe(connect.reload());
});
// gulp-htmlmin

gulp.task('js',  function() {
    gulp.src('app/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))

})
gulp.task('css',  function() {
    gulp.src('app/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));

})
gulp.task('img', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
)
// 同时执行多个任务

gulp.task('watch', function() {
    // 监听app下面所有的html文件, 如果文件修改就执行html任务
    gulp.watch("app/**/*.html", ['html']);
    gulp.watch("app/**/*.js", ['js']);
})

// 执行静态文件的压缩和编译
gulp.task('build', ['html', 'js','css','img']);
// 卡其本地服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 4444,
        livereload: true // 开启页面刷新
    });
  });

  gulp.task('default', ['build', 'connect', 'watch']);

