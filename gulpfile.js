const gulp = require('gulp')
const pug = require('gulp-pug')

// Pugのコンパイル
gulp.task('pug', () => {
    gulp.src([ './assets/pug/*.pug', '!./assets/pug/_*.pug' ])
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./public/'))
})

// Pugの自動コンパイル
gulp.task('watch', [ 'pug' ], () => {
		const watcher = gulp.watch('./assets/pug/*.pug', [ 'pug' ])
  	watcher.on('change', event => {})
})
