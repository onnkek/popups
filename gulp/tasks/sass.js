import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import autoPrefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import webpCss from "gulp-webpcss";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sassCompiler = gulpSass(dartSass);

export const sass = () => {
    return app.gulp.src(app.path.src.sass, { soursemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SASS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sassCompiler({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpCss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}