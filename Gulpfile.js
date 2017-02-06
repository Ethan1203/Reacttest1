let gulp       = require('gulp');
let browserify = require('gulp-browserify');
let rename     = require('gulp-rename');

gulp.task("default", ["build"]);

gulp.task('build', function(){
	gulp.src("js/*.js")
		.pipe(browserify({
			transform: ["reactify"]
		}))
		.pipe(rename("bundle.js"))
		.pipe(gulp.dest("./src/build/"));
});
