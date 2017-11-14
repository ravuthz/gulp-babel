const gulp = require("gulp");
const babel = require("gulp-babel");

const babelify = require("babelify");
const browserify = require("browserify");

const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

const srcFile = "src/app.js";

gulp.task("es6", () => {
    return gulp
        .src(srcFile)
        .pipe(
            babel({
                presets: ["es2015"]
            })
        )
        .pipe(gulp.dest("build"));
});

gulp.task("es6-min", () => {
    return browserify(srcFile)
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source("app.js"))
        .pipe(buffer())
        .pipe(gulp.dest("build/"));
});

gulp.task("default", () => {
    gulp.watch(srcFile, ["es6-min"]);
});