Börja med att installera Webpack och webpack-CLI:

npm install --save-dev webpack webpack-cli

--- --- --- --- --- 

För att vi ska ha något att bundla ihop behöver vi skapa några filer:

Skapa en src-mapp

I den en index.js:

import menu from './components/menu/menu.js'

const mountPoint = document.querySelector('#root')
mountPoint.appendChild(menu())

Och en ny mapp components/menu

Och i den menu.js:

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

function createNav() {
  const navElem = document.createElement('nav')
  return navElem
}

function createLinks(items, mount) {
  items.forEach(({ name, href }) => {
    const aElem = document.createElement('a')
    aElem.textContent = name
    aElem.href = href
    mount.appendChild(aElem)
  })
  return mount
}

export default () => createLinks(menuItems, createNav())

--- --- --- --- --- 

Vi behöver berätta för webpack var den ska börja leta filer, och var resultatet skall hamna:

const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './public'),
    filename: 'main.js',
  },

  optimization: {
    minimize: false
  },

  mode: 'development',
};


--- --- --- --- ---

Vi kan köra Webpack via node_modules-mappen:

./node_modules/.bin/webpack-cli

--- --- --- --- ---

Vi installerar först våra loaders:

npm install --save-dev css-loader style-loader

--- --- --- --- ---

Sen behöver vi skapa lite CSS-filer, en global.css i src-roten, och en menu.css i menu-mappen:

global.css

html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

:local(.menu) {
  padding: 10px;
  border-bottom: 1px solid #3d3d3d;
}

:local(.menu) > :local(.link) {
  display: inline-block;
  box-sizing: border-box;
  width: 30%;
  padding: 10px;
  margin-right: 5%;
  text-align: center;
  text-decoration: none;
  background: #e74c3c;
  color: #ffffff;
  font-weight: bold;
  border-radius: 3px;
  border-bottom: 4px solid #c0392b;
  border-right: 1px solid #c0392b;
}

:local(.menu) > :local(.link):last-child {
  margin-right: 0;
}

--- --- --- --- ---

Sen så måste vi importera CSS:en i vår Javascript:

index.js
import './global.css'

menu.js
import style from './menu.css' 

(Vi återkommer till skillnaderna mellan de här senare)

--- --- --- --- ---

Efter det behöver vi fixa våra loaders i config-filen:

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }
        ],
      },
    ],
  },

--- --- --- --- ---

Vi testar att bygget inte kraschar:

./node_modules/.bin/webpack-cli

--- --- --- --- ---

Vi installerar html-webpack-plugin:

npm install --save-dev html-webpack-plugin

--- --- --- --- ---

Vi behöver skapa en mall, så vi skapar en index.html i src:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

--- --- --- --- ---

Vi behöver lägga till att vi ska använda vårt plugin i config-filen:

const HtmlWebpackPlugin = require('html-webpack-plugin');

 plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
  ],

--- --- --- --- ---

Vi testar att bygga:

./node_modules/.bin/webpack-cli

--- --- --- --- ---

Vi kan kolla på filerna i browsern, men vi kan se att filen pekar lite fel, vi kan fixa det för hand lite snabbt, men vi ska åtgärda detta längre fram.

Kolla CSS:en som blivit inkastad i HTML-dokumentet!

--- --- --- --- ---

Vi lägger till source maps:

devtool: 'source-map',

--- --- --- --- ---

Vi lägger till en build-fil:

npm install --save-dev webpack-merge

Och en build-config:
const merge = require('webpack-merge');
const conf = require('./webpack.config.js');

module.exports = merge(conf, {
  output: {
    publicPath: './',
  },

  optimization: {
    minimize: true
  },

  mode: 'production',
});

--- --- --- --- ---

Vi kör med production-filen istället:

./node_modules/.bin/webpack-cli --config webpack.config.build.js

Nu kan vi kolla direkt i browsern!

--- --- --- --- ---

Vi installerar webpack-dev-server:

npm install --save-dev webpack-dev-server

Och lägger till några script-kommandon i package.json:

 "start": "webpack-dev-server",
 "build": "webpack --config ./webpack.config.build.js"

Sen kör vi:

npm run build
npm run start

--- --- --- --- ---

Vi testar att lägga till klassern och se live reload:

navElem.classList.add(style.menu)

--- --- --- --- ---

Vi installerar babel, samt babel-loader:

npm install --save-dev @babel/core @babel/preset-env babel-loader


Lägger till babel loader i config:


      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },

Sen babel-konfig i package.json:

  "babel": {
    "presets": ["@babel/env"]
  },
  "browserslist": [
    "last 2 versions",
    "not dead",
    "> 0.2%"
  ]

--- --- --- --- ---