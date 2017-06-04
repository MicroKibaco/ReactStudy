var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var wrapper = require('gulp-wrapper');

gulp.task('scripts', function () {
	var footer = `
		window.eventemitter = {
			EventEmitter: EventEmitter,
		};
	}(window));`;

	gulp.src(['src/helpers', 'src/*.js'])
	.pipe(concat('eventemitter.js'))
	.pipe(wrapper({
		header: `(function (window) {`,
		footer: footer
	}))
	.pipe(uglify())
	.pipe(gulp.dest('build'));
})
