const gulp = require('gulp')

const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const webpack = require('webpack-stream')
const babel = require('gulp-babel')
const minify = require('gulp-babel-minify')

gulp.task('css', () => {
  return gulp.src(['src/css/main.css'])
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', () => {
  return gulp.src('src/js/main.js')
    .pipe(webpack({
      output: { filename: 'bundle.js' }
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['css', 'js'])
