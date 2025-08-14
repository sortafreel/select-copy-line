"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand('select-copy-line.copyWithPath', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.selection.isEmpty) {
            return;
        }
        const selection = editor.selection;
        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;
        const relativePath = vscode.workspace.asRelativePath(editor.document.uri);
        const lineRange = startLine === endLine
            ? `L${startLine}`
            : `L${startLine}-${endLine}`;
        const result = `@${relativePath}#${lineRange}`;
        vscode.env.clipboard.writeText(result);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map