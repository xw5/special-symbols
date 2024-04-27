const hx = require("hbuilderx");
const { showView } = require('./src/main.js');

function activate(context) {
    let disposable = hx.commands.registerCommand('symbols.symbols', (param) => {
        if (param == null) {
            param = {};
        };
        showView(param);
    });
    context.subscriptions.push(disposable);
	
	let symbolsAbout = hx.commands.registerCommand('symbols.about', () => {
	    hx.env.openExternal('https://ext.dcloud.net.cn/plugin?id=17859');
	});
	context.subscriptions.push(symbolsAbout);
};

function deactivate() {

};

module.exports = {
    activate,
    deactivate
}
