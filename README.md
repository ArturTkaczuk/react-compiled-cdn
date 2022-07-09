# react-compiled-cdn
Make .development => .production.min in index.html

## Steps:

1. Install babel-cli and babel-preset-react-app@3 `npm i babel-cli babel-preset-react-app@3`
2. Run `npx babel --watch src --out-dir dist --presets react-app/prod` for watch mode
3. Attach script to html from /dist folder `<script src="./dist/index.js" type="text/babel"></script>`
