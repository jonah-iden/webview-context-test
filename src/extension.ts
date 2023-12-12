// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.window.registerWebviewViewProvider('webview-context-test.webview', {
		resolveWebviewView: (webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken) => {
			webviewView.webview.html = '<h1 data-vscode-context="{&quot;testProp&quot;: &quot;1&quot;}">Test 1</h1><h1 data-vscode-context="{&quot;testProp&quot;: &quot;2&quot;}">Test 2</h1>';
		},
	});

	vscode.commands.registerCommand('webview-context-test.test-command-1', () => vscode.window.showInformationMessage('Test 1'));
	vscode.commands.registerCommand('webview-context-test.test-command-2', () => vscode.window.showInformationMessage('Test 2'));
}

// This method is called when your extension is deactivated
export function deactivate() { }
