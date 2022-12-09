import plumber from "gulp-plumber";
import notify from "gulp-notify";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import newer from "gulp-newer";

export const plugins = {
    replace: replace,
    notify: notify,
    plumber: plumber,
    browsersync: browsersync,
    newer: newer
}