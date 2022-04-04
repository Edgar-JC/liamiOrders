const {src,dest,series,watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function buildStyles(done) {
    src("src/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));
    done();
}

function watchChanges() {
    watch("src/scss/**/*.scss", buildStyles)
}

exports.buildStyles = buildStyles;
exports.watchChanges = watchChanges;

exports.default = series(buildStyles, watchChanges);