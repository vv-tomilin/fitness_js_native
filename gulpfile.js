//let project_folder = require("path").basename(__dirname);
let project_folder = 'C:/MAMP/htdocs/fitness_js'
let source_folder = "src";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
		db: project_folder + "/db/"
  },
  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/scss/style.scss",
    allscss: source_folder + "/scss/**/.scss",
    js: source_folder + "/js/main.js",
    img: source_folder + "/img/**/*.+(jpg|png|svg|gif|ico|webp)",
    fonts: source_folder + "/fonts/*.ttf",
		db: source_folder + "/db/**"
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.+(jpg|png|svg|gif|ico|webp)"
  },
  clean: "./" + project_folder + "/"
}

const { src, dest } = require("gulp"),
  gulp = require("gulp");
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const del = require("del");
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const group_media = require("gulp-group-css-media-queries");
const clean_css = require("gulp-clean-css");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const webpack = require("webpack-stream");


function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/"
    },
    port: 3000,
    directory: true,
    notify: false
  })
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(
      group_media()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["Last 4 versions"],
        cascade: true
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
	return src (path.src.js)
					.pipe(webpack({
						mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [['@babel/preset-env', {
                          debug: true,
                          corejs: 3,
                          useBuiltIns: "usage"
                      }]]
                    }
                  }
                }
              ]
            }
					}))
					.pipe(dest(path.build.js))
					.pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function fonts() {
  return src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
    .pipe(src(path.src.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}

function db() {
	return src(path.src.db)
		.pipe(dest(path.build.db))
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css, js, html, images, fonts, db));

let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.db = db;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;