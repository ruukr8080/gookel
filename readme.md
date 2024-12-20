- 리액트 패키지 추가

```bash
npm install --save react react-dom
```

- 리액트 소스 폴더 만들기

```bash
mkdir src/js
```

- index.html에 root id 생성

```bash
<div id="root"></div>
```

- src/js/index.js 파일 만들기

```bash
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<h1>Hello React App</h1>, document.getElementById('root'));
```

- 웹팩용 패키치 추가

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader sass-loader sass webpack webpack-cli
```

- webpack.common.js 추가 (root 폴더)

```bash
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates \`style\` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};
```

- package.json에 webpack 스크립트 추가

```bash
"watch": "webpack --config webpack.common.js --watch",
```

- 스크립트 실행  
- 스크립트가 실행되면 build/js/app.js가 생성됨.

```bash
npm run watch
```

- index.html에 app.js 추가

```bash
<div id="root"></div>
<script src="./build/js/app.js"></script>
```

- 실행

```bash
npm start
```

- src/js/App.js

```js
import React from 'react';

export default function App() {
  return (
      <h1>testetetetet</h1>
  )
}

```

- src/js/index.js

```js
//src/js/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; 

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```