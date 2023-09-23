const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

gulp.task("build", () => {
  return gulp
    .src("app/*.jsx")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"],
      })
    )
    .pipe(concat("all.Js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
