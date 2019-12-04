var gulp = require('gulp');

//压缩html
var htmlClean = require('gulp-htmlclean');

//压缩图片
var imageMin = require('gulp-imagemin');

//压缩js
var uglify = require('gulp-uglify');

//去掉js中的调试语句
var debug = require('gulp-strip-debug');

//压缩css
var cleanCss = require('gulp-clean-css');


var babel = require('gulp-babel');

//添加共有
var fileinclude = require('gulp-file-include');

//css添加前缀  postcss  autoprefixer
var postCss = require('gulp-postcss');
var autoprefixer = require('autoprefixer')

//开启服务器
var connect = require('gulp-connect');

//开启监听 文件变化
gulp.task('watch', function () {
    gulp.watch(folder.src + 'page/**', ['html']);
    gulp.watch(folder.src + 'css/**', ['css']);
    gulp.watch(folder.src + 'js/**', ['js']);
});

var folder = {
    src: 'src/',
    dist: 'dist/'
}


//判断当前的环境
process.env.NODE_ENV == 'production';
// export NODE_ENV=development  设置环境变量


//创建任务
gulp.task('html', function () {
    gulp.src(folder.src + 'page/**')
        .pipe(connect.reload())
        .pipe(htmlClean())

        .pipe(gulp.dest(folder.dist + 'page/'))
});

gulp.task('fileinclude', function () {
    gulp.src('./page/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
    gulp.src(folder.src + 'images/**')
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + 'images/'))
        console.log(111)
});

gulp.task('css', function () {
    gulp.src(folder.src + 'css/**')
        .pipe(connect.reload())
        .pipe(postCss([autoprefixer()]))
        .pipe(cleanCss())
        .pipe(gulp.dest(folder.dist + 'css/'))
});

gulp.task('js', function () {
    gulp.src(folder.src + 'js/**')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(connect.reload())

        .pipe(debug())
        .pipe(uglify())
        .pipe(gulp.dest(folder.dist + 'js/'))
});

gulp.task('bootstrap', function () {
    gulp.src(folder.src + 'plug/bootstrap/css/*.css')
        .pipe(gulp.dest('public/css/'))
        .pipe(connect.reload())
        .pipe(postCss([autoprefixer()]))
        .pipe(gulp.dest(folder.dist + 'plug/bootstrap/css'));
    gulp.src(folder.src + 'plug/bootstrap/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(debug())
        .pipe(uglify())
        .pipe(connect.reload())
        .pipe(gulp.dest(folder.dist + 'plug/bootstrap/js'));
    gulp.src(folder.src + 'plug/bootstrap/fonts/*')
        .pipe(connect.reload())
        .pipe(gulp.dest(folder.dist + 'plug/bootstrap/fonts'));
});


gulp.task('server', function () {
    connect.server({
        port: '8888',//改变默认端口
        livereload: true
    });
});


gulp.task('default', ['html', 'css', 'js', 'img', "bootstrap", 'server', 'watch']);