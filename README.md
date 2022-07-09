# react-compiled-cdn
Make .development => .production.min in index.html

## Steps:

1. Change *.../react.development.js* to *.../react.production.min.js*
2. Change *.../react-dom.development.js* to *.../react-dom.production.min.js*
3. Install babel-cli and babel-preset-react-app@3 `npm i babel-cli babel-preset-react-app@3`
4. Put **index.js** to /src folder
5. Delete `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` from index.html
6. Attach script to index.html from /dist folder `<script src="./dist/index.js"></script>`
7. Run `npx babel --watch src --out-dir dist --presets react-app/prod` for watch mode

**Done**
