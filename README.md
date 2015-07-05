
The three folders contain alternative tooling-solutions for developing with angular 1.4.

## Browserify

```bash
cd gulp-browserify-scss
npm install
./node_modules/gulp/bin/gulp.js browserify
```

Then open index.html in your favourite browser.

## Webpack

```bash
cd gulp-browserify-scss
npm install
./node_modules/webpack/bin/webpack.js
```

Then open index.html in your favourite browser.

You can use `--watch` when running webpack to enable live-developing.

## JSPM

run via:

``` bash
cd jspm
npm install
./node_modules/jspm/jspm.js install
```

then serve via a http server (your browser will block direct file-access if you've just opened the `index.html`), e.g.

``` bash
npm install nws
./node_modules/nws/bin/nws -p 8000
```

### Deployment

JSPM doesn't need bundling during development, but for deployment it can be done via:

``` bash
./node_modules/jspm/jspm.js bundle app/app --inject
```

Then you need to include the build.js in index.html.

## Unminified Sizes

```bash
$ du -sh gulp-browserify-scss/build/ webpack/build/ jspm/build.js
2.7M    gulp-browserify-scss/build/
1.1M    webpack/build/
440K    jspm/build.js
```

@peacememories meant that webpack needs a plugin for tree-shaking. I should check that out. And minification / uglification. #TODO

Otherwise I'd say we have a clear winner.
