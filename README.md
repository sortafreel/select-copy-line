# Select-Copy-Line

Basic VSCode extension to select lines in the file, press `cmd+alt+l`, and get relative file path + lines selected (for example, `@src/extension.ts#L10-12`) to use in Claude Code or other places.

The personal goal is to provide highly focused context to coding agents instead of feeding whole files and eating up the context window.

## How to install

- `> Extensions: Install from VSIX...` in the Cursor/VSCode
- Install `select-copy-line-0.0.1.vsix`
- Use as you wish

## How to update

- Clone the repo
- Change the logic
- `npm install` -> `npm run compile` -> `npm install --save-dev @vscode/vsce` -> `npx vsce package` -> Use as you wish