const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("watch", () => {
  watch("app/**.jsx", () => gulp.series("build")());
});
