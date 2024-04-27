const path = require('path');

const indexFile = path.join(path.resolve(__dirname), '../view/symbols/dist/assets', 'index-DUjGzTCA.js');
const legacyFile = path.join(path.resolve(__dirname), '../view/symbols/dist/assets', 'index-legacy-xwMsE-8z.js');
const polyfillFile = path.join(path.resolve(__dirname), '../view/symbols/dist/assets', 'polyfills-legacy-DmVBe7eZ.js');
const cssFile = path.join(path.resolve(__dirname), '../view/symbols/dist/assets', 'index-C5_LivlK.css');


function Html() {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>特殊符号输入</title>
        <script type="module" crossorigin src="${indexFile}"></script>
        <link rel="stylesheet" crossorigin href="${cssFile}">
        <script type="module">import.meta.url;import("_").catch(()=>1);(async function*(){})().next();if(location.protocol!="file:"){window.__vite_is_modern_browser=true}</script>
        <script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
      </head>
      <body>
        <div id="app"></div>
        <script nomodule>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script>
        <script nomodule crossorigin id="vite-legacy-polyfill" src="${polyfillFile}"></script>
        <script nomodule crossorigin id="vite-legacy-entry" data-src="${legacyFile}">System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>
      </body>
    </html>
`
};

module.exports = Html;