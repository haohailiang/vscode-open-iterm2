'use strict';
import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.openCurProjectPath', (e: vscode.Uri) => {
        if (process.platform === "darwin") {
            const scriptPath = path.join(__dirname, "../../res/open-item2.scpt");
            let folderPath = vscode.workspace.rootPath; // get the open folder path
            spawn("osascript", [scriptPath, "cd", `"${folderPath}"`])
        } else {
            vscode.commands.executeCommand("workbench.action.terminal.openNativeConsole", e);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
