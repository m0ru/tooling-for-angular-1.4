TODOs:

* all CSS pipelines
* all Minification

## JSMP

run via:

```bash
npm install
./node_modules/jspm/jspm.js install
``` 

then serve via a http server (your browser will block direct file-access if you've just opened the `index.html`), e.g. `python -m http.server`

### Deployment

JSPM doesn't need bundling during development, but for deployment it can be done via:

``` bash
./node_modules/jspm/jspm.js bundle app/app --inject
``` 

