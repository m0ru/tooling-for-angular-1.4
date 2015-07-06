
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

### Optimizing

<https://github.com/webpack/docs/wiki/optimization>

```bash
./node_modules/webpack/bin/webpack.js --optimize-minimize --optimize-dedupe
```

Changes the build from 1.1M to 150K

## JSPM

run via:

``` bash
cd jspm
npm install
```

then serve via a http server (your browser will block direct file-access if you've just opened the `index.html`), e.g.

``` bash
npm install nws
./node_modules/nws/bin/nws -p 8000
```

### Deployment

JSPM doesn't need bundling during development, but for deployment it can be done via:

``` bash
./node_modules/jspm/jspm.js bundle app/app
```

Then you need to include the build.js in index.html. Or use the `--inject` option when bundling.

<blockquote cite="https://github.com/jspm/jspm-cli/wiki/Production-Workflows">To create an output distributable script file that can be included entirely on its own independent of SystemJS and jspm, we can use <code>bundle-sfx</code>.</blockquote>

### Optimizing

<https://github.com/webpack/docs/wiki/optimization>

```bash
./node_modules/jspm/jspm.js bundle app/app --minify
```

Changes the build from 440K to 151K

Also in case we don't want to bundle, creating a dependency-cache improves load-times a lot, as the whole dependency tree is evident from the beginning and can be loaded in paralell:

```bash
jspm depcache app/main
```

## Unminified Sizes

The raw angular folder is 1.6M in size.

```bash
$ du -sh gulp-browserify-scss/build/ webpack/build/ jspm/build.js
2.7M    gulp-browserify-scss/build/
1.1M    webpack/build/
440K    jspm/build.js
```

I assume jspm already does some tree-shaking / deduplication to achieve this size. I have no idea how browserify fails so hard here.

## Minified Sizes

```bash
$ du -sh gulp-browserify-scss/build/ webpack/build/ jspm/build.js
170K    gulp-browserify-scss/build/
150K    webpack/build/
151K    jspm/build.js
```
