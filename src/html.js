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
		<script>
		  (function (win) {
			// 获取页面所有的 <script > 标签对象
			let scripts = document.getElementsByTagName('script')
			// 遍历标签
			for(let i = 0; i < scripts.length; i++) {
			  // 提取单个<script > 标签对象
			  let script = scripts[i]
			  // 获取标签中的 src
			  let url = script.getAttribute("src")
			  // 获取标签中的 type
			  let type = script.getAttribute("type")
			  // 获取标签中的js代码
			  let scriptText = script.innerHTML
			  // 如果有引用地址或者 type 属性 为 "module" 则代表该标签需要更改
			  if (url || type === "module") {
				// 创建一个新的标签对象
				let tag=document.createElement('script');
				// 设置src的引入
				tag.setAttribute('url',url);
				// 设置js代码
				tag.innerHTML = scriptText
				// 删除原先的标签
				script.remove()
				// 将标签添加到代码中
				document.getElementsByTagName('head')[0].appendChild(tag)
			  }
			}
		  })(window)
		</script>
	  </body>
    </html>
`
};

module.exports = Html;
