# ast-grep LSP bug

When specifying a files array of globs inside a rule, the LSP doesn't work
inside the editor. This is a simple project to reproduce the issue.

## How to reproduce

- Clone this repository
- Run `npm install` to install the `ast-grep` CLI
- Run `npm run scan` this will run `ast-grep scan`, this should fail with an
  error for `src/index.js` file

> [!NOTE]
>
> The setup of the LSP in your editor will defer between editors, but the only
> change you need to make is to point the LSP to the `ast-grep` binary. The
> binary is located in `node_modules/.bin/ast-grep`

- Now open your editor and open `src/index.js` file, you won't see any errors.

- **Now, if you remove the `files` property from the rule, and restart the LSP
  server, you will see errors. But this will break `npm run scan` because it
  will show the warning on `index.js` and `src/index.js` too. And that's not
  what we want.**
