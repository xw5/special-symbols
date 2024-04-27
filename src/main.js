const os = require('os');
const fs = require('fs');
const path = require('path');
const hx = require('hbuilderx');

const Html = require('./html.js');

/**
 * @description 打开视图
 * @param {Object} projectInfo 项目管理器选中的项目信息
 */
function showView(param) {

    // 创建webviewDialog, 并设置对话框基本属性，包括标题、按钮等
    let webviewDialog = hx.window.createWebViewDialog({
        modal: true,
        title: "特殊符号",
        description: "点击符号可以插入符号到当前光标同时会复制当前符号，你也可以去粘贴使用",
        dialogButtons: ['关闭'],
        size: { width: 960, height: 680 }
    }, {
        enableScripts: true
    });

    // 用于渲染对话框主要内容
    let webview = webviewDialog.webView;
    webview.html = Html();

    webview.onDidReceiveMessage((msg) => {
        let action = msg.command;
        switch (action) {
            case 'closed':
                // 关闭对话框
                webviewDialog.close();
                break;
			case 'insert':
			    // 关闭对话框
			   insertText(msg.data);
			    break;
            default:
                break;
        };
    });

    // 显示对话框，返回显示成功或者失败的信息，主要包含内置浏览器相关状态。
    let promi = webviewDialog.show();
    promi.then(function (data) {
        console.log(data)
    });
};

 /* 插入文本
 * @param {String} text 
 * @returns 
 */
const insertText = async (text) => {
	// 获取行首行尾
	// let lineStartPosition = await getCurrentLineFromPosition();
	// if (lineStartPosition == undefined) {
	// 	hx.window.showErrorMessage("提示：获取当前行位置信息错误，插入占位内容失败。请重试", ["我知道了"]);
	// 	return;
	// };
	// startPosition = lineStartPosition;
	let editor = await hx.window.getActiveTextEditor();
	let selection = editor.selection;
	// console.log('---- selection ----:', selection)
	let workspaceEdit = new hx.WorkspaceEdit();
	let edits = [];
	edits.push(new hx.TextEdit({
		start: selection.start,
		end: selection.end
	}, text));

	workspaceEdit.set(editor.document.uri, edits);
	hx.workspace.applyEdit(workspaceEdit);
}

module.exports = {
	insertText: insertText,
	showView: showView
};
